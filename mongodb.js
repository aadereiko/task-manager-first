// CRUD

const mongodb = require('mongodb');
const { MongoClient, ObjectID } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  (error, client) => {
    if (error) {
      console.log(error);
      return console.log('Unable to connect to db');
    }

    console.log('RUN');

    const db = client.db(databaseName);
    db.collection('tasks')
      .deleteOne({
        description: 'First task',
      })
      .then((res) => console.log(res, 'RES'))
      .catch((err) => console.log(err, 'ERR'));
  }
);
