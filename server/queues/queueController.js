const Queue = require('./queueModel')
const Inqueue = require('./inQueueModel')
const Promise = require('bluebird')

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
  inQueue.findOne({
    where: { lineName: req.body.from }
  }).then(completed => {
    completed.destroy();
    console.log(completed)
  })
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
