const Queue = require('./queueModel')
const Inqueue = require('./inqueueModel')
const Promise = require('bluebird')


var client = require('twilio')(process.env.TWILLIO_SID, process.env.TWILLIO_TOKEN);


module.exports = {
  enqueue,
  dequeue,
  stats
};

function enqueue(req, res) { //signing up for a queue
  Queue.create({
    userNumber: req.body.phone,
    userID: req.body.id,
    lineName: req.body.line,
    capacity: req.body.capacity,
  })
  .then(waiting => {
    console.log('waitingUser is waiting for ', waiting.dataValues.lineName)
    return Promise.all([waiting, Inqueue.findAndCountAll({
      where: { lineName: waiting.dataValues.lineName }
    })]);
  })
  .spread((waiting, inqueue) => {
    if(inqueue.count < waiting.capacity) {
      // use waiting here
      console.log(waiting);
      return Promise.all([waiting, Inqueue.create(waiting.dataValues)])
        .spread((waiting, created) => {
          return waiting.destroy();
        })
        .then(destroyed => {
          console.log('destroyed', destroyed, ' after adding them to queue');
        })
    }
    // return sendMessage promise
  })
  // if findall inqueue < capacity //if there are less than capacity inququed then notifiy and remove from queue
  // notify person
  .then(() => { res.sendStatus(200); })
  .catch((err) => { console.log(err); });
}

function stats(req, res) {

}

function dequeue(req, res) { //getting a text messsage for done
console.log(req.body)
  Inqueue.findOne({
    where: { userNumber: req.body.From }
  }).then(completed => {
    if(completed) {
      var line = completed.dataValues.lineName
      console.log("completed", completed)
      completed.destroy();
      Queue.findOne({where: {lineName:line}})
      .then(item => {
        if(item) {
          Inqueue.create(item.dataValues);;
          sendMessage(`Hello ${item.dataValues.id} it is your spot in the line, please reply when you are done`, item.dataValues.userNumber)
          item.destroy()
          // sendMessag
        }
      })
    } else {
      // sendMessag
    }
  })
  .then(() => { res.sendStatus(200); })
  .catch((err) => { console.log(err); });
//   .then(person => {//find next person in queue for line
//     notify(person)
//   })
//   .then(() => { res.status(200).end(); })
//   .catch((err) => { console.log(err); });
}
//
// function notify(person) { //let people know they are inqueued and remove them from queue db and insert into inqueue
//   //send message
//   //add to enquque
//   person.destroy()

// }

function sendMessage(message, number) {
  client.sendMessage({

      to: number, // Any number Twilio can deliver to
      from: "+16262473389", // A number you bought from Twilio and can use for outbound communication
      body: message // body of the SMS message

  }, function(err, responseData) { //this function is executed when a response is received from Twilio

      if (!err) { // "err" is an error received during the request, if any

          // "responseData" is a JavaScript object containing data received from Twilio.
          // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
          // http://www.twilio.com/docs/api/rest/sending-sms#example-1

          console.log(responseData.from); // outputs "+14506667788"
          console.log(responseData.body); // outputs "word to your mother."

      }
  });
}
