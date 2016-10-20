import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';

import routes from './routes/index';
import users from './routes/users';
import * as mongoose from 'mongoose';
// my imports for forum
import Message from './models/forumModel';
import Message1 from './api/forumt';

//imports for to do list
import MyToDo from './models/toDoListModel';
import MyToDo1 from './api/todo2';

//import from api and use it on bottom




let app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/api', express.static(path.join(__dirname, 'api')));

app.use('/', routes);
app.use('/users', users);

// need this to use for express
app.use('/forumt', Message1);
app.use('/todo2', MyToDo1);


// APIs
app.use('/api', require('./api/makes'));
app.use('/api', require('./api/cars'));
app.use('/api', require('./api/movies'));
app.use('/api', require('./api/genres'));
app.use('/api', require('./api/guestbook'));
app.use('/api', require('./api/deepThought'));


// contection and creationg database
///////////////////////////////////////

const connectionString = 'mongodb://jtsurfrat:porter566@ds011820.mlab.com:11820/forum';

mongoose.connect(connectionString).then(() => {
  // adding data
  mongoose.connection.db.dropDatabase(() => {
    Message.create({
      name: "Bob P",
      username: "Bob@bob.com",
      messageKind: "question",
      title: "meaning of life",
      text: "42 is the meaning of life, what is the quesiton"
    },
    {
      name: "Mike Pens",
      username: "Mike@pens.com",
      messageKind: "topic",
      title: "who am I",
      text: "Who am I, I have come to terms, I am very average"
    }).catch((err) => {
      console.error(`failed to seed messages ${err}`);
    }),
    MyToDo.create({
      name: "Dog",
      description: "Walk Dog"
    },
    {
      name: "Cat",
      description: "Shave the Cat"
    }).catch((err) => {
      console.log(err);
    })
  })
});




// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err:Error, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err:Error, req, res, next) => {
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export = app;
