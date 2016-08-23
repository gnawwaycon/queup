const Queue = require('./queueModel')
// const inQueue = require('./inQueueModel')

module.exports = {
  enqueue,
  // dequeue
};

function enqueue(req, res) { //signing up for a queue
  Queue.create({
    userNumber: req.body.phone,
    userID: req.body.id,
    lineName: req.body.line,
    capacity: req.body.capacity,
  })
  // if findall inqueue < capacity //if there are less than capacity inququed then notifiy and remove from queue
  // notify person
  .then(() => { res.status(200).end(); })
  .catch((err) => { console.log(err); });
}

function dequeue(req, res) { //getting a text messsage for done
console.log(req)
//   inQueue.findOne({
//     where: { lineName: req.line }
//   })
//   .then(person => {//find next person in queue for line
//     notify(person)
//   })
//   .then(() => { res.status(200).end(); })
//   .catch((err) => { console.log(err); });
// }
//
// function notify(person) { //let people know they are inqueued and remove them from queue db and insert into inqueue
//   //send message
//   //add to enquque
//   person.destroy()

}
