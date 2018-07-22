//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('SysUsers').insertOne({
  //      name: 'Wahila Zlatan',
  //      age: 27,
  //      location: 'Ziwani Nairobi'
  // }, (err,result) =>{
  // if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  // db.collection('Todos').find().toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // })
  //only fetch items where competed is false
  // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // });
  //fetch using objectID
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b543bb2adff689cf5e46e6b')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // });
  //count query
  db.collection('Todos').find().count().then((count) =>{
    console.log(`Todos count: ${count}`);
  },(err) =>{
    console.log('Unable to fetch todos', err);
  });
  //client.close();
});
