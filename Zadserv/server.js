'use strict';
//Server za zadrugu nodejs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./server/config/database')
const favicon  = require('serve-favicon');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const fs = require('fs');
const helmet = require('helmet');
const compression = require('compression');

// express initialize
const app = express();

//use configure app
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/zadruga'); 'ovo sam dodao jer je bilo upozorenje i nasao na kako se ispravlja
mongoose.connect(config.database,{ useMongoClient: true });
//mongoose.connect('mongodb://pera:171296@ds153637.mlab.com:53637/omzadruga',{ useMongoClient: true }); 
//
//mongodb://<pera>:<171296>@ds153637.mlab.com:53637/omzadruga

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("conect to mongose");
});


// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//use midleware

//Morgan i web logovi
const logDirectory = path.join(__dirname, 'log')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// create a rotating write stream
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})
// setup the logger // Standard Apache combined log output. or use common Standard Apache common log output. dev


app.use(morgan('common', {stream: accessLogStream}))

app.use(cors()); // CORS Middleware 
// uncomment after placing your favicon in /public

app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
// Passport Middleware


app.use(passport.initialize());
app.use(passport.session()); 
require('./server/config/passport')(passport);

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(helmet());
// compress all responses
app.use(compression());
//Route
const users = require('./server/Route/users')
const index = require('./server/Route/index')

const DrzaveRoute = require('./server/Route/DrzaveRouters')
const PosaoRoute = require('./server/Route/PosaoRouters')
const ParamRoute = require('./server/Route/ParamRouters');
const VlasnikRoute = require('./server/Route/VlasnikRouters');
const ZadrugarRouter = require('./server/Route/ZadrugarRouters');
const ZanimanjaRouter = require('./server/Route/ZanimanjaRouters');
const RadnikRouter = require('./server/Route/RadnikRouters');
const PartneriRouter = require('./server/Route/PartneriRouters');
const OpstineRouter= require('./server/Route/OpstineRouters');
const KonstantaRouter = require('./server/Route/KonstantaRouters');
const FondSatiRouter = require('./server/Route/FondSatiRouters');
const KorisnikRouter = require('./server/Route/KorisnikRouters');
const MestaRouter = require('./server/Route/MestaRouters');
const VezbeRouter = require('./server/Route/VezbaRouters');
const ActLogRouter = require('./server/Route/ActLogRouters');
const BankeRouter = require('./server/Route/BankeRouters');
const CountRotes = require('./server/Route/CountRouters');


app.use('/users', users); 

app.use('/', [index,DrzaveRoute,PosaoRoute,ParamRoute,VlasnikRoute,ZadrugarRouter,
              ZanimanjaRouter,RadnikRouter,PartneriRouter,OpstineRouter,MestaRouter,
              KonstantaRouter,FondSatiRouter,KorisnikRouter,MestaRouter,VezbeRouter,
              ActLogRouter,BankeRouter,CountRotes])


//Route in app
app.get('/', function(req, res) {
  res.render('pages/index');
});


//End Route


//process.env.NODE_ENV = 'production';
//app.set('env','production');
//console.log(app.get('env'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});


//starter server
var SERVER_PORT = process.env.PORT || 3000;
 app.listen(SERVER_PORT, function() {
   console.log('listening on ' + SERVER_PORT);
})