const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');// .fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
 //  console.log("username" + jwt_payload.data.username);
 //  console.log("ID " + jwt_payload.data._id);
//jwt_payload._doc._id
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if(err){
        console.log("Error" + err);
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
} 


// module.exports = function(passport){
//   let opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//   opts.secretOrKey = config.secret;
//   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log(jwt_payload.sub);
//     User.findOne({_id: jwt_payload.sub}, function(err, user) {
//       if (err) {
//           return done(err, false);
//       }
//       if (user) {
//           return done(null, user);
//       } else {
//           return done(null, false);
//           // or you could create a new account 
//       }
//   });
//     // User.getUserById(jwt_payload._doc._id, (err, user) => {
//     //   if(err){
//     //     return done(err, false);
//     //   }

//     //   if(user){
//     //     return done(null, user);
//     //   } else {
//     //     return done(null, false);
//     //   }
//     // });
//   }));
// } 

// var JwtStrategy = require('passport-jwt').Strategy,
// ExtractJwt = require('passport-jwt').ExtractJwt;
// var opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
// opts.secretOrKey = config.secret;
// passport.use(new JwtStrategy(opts,
//opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//module.exports = function(passport){}
//  module.exports = function(passport){
//    let opts = {};
//    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") ;//.fromAuthHeader();
//    opts.secretOrKey = config.secret;
//    console.log("passport ulazim ");
//    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//      console.log("jwt_payload " + jwt_payload  + "jwt_payload._doc._id  "  + jwt_payload.data._id);

//      User.getUserById(jwt_payload.data._id, (err, user) => {
//        console.log('getUserById ' + jwt_payload._doc._id );
//        if(err){
//          console.log('Error pasword');
//          return done(err, false);
//        }

//        if(user){
//          console.log('if(user)');
//          return done(null, user);
//        } else {
//          console.log('if(user) else');
//          return done(null, false);
//        }
//      });
//    }));
//  } 



// var passport = require("passport");  
// var passportJWT = require("passport-jwt");  
// const User = require('../models/user');
// const config = require('../config/database');
// var ExtractJwt = passportJWT.ExtractJwt;  
// var Strategy = passportJWT.Strategy;  
// var params = {  
//     secretOrKey: config.secret,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT") //ExtractJwt.fromAuthHeader()
// };

// module.exports = function() {  
//     var strategy = new Strategy(params, function(payload, done) {
//         var user = User[payload.id] || null;
// //         console.log("User je "+ user +  " payload" + payload + "payload._id " + payload.id);
//         if (user) {
//             return done(null, {
//                 id: user.id
//             });
//         } else {
//             return done(new Error("User not found"), null);
//         }
//     });
//     passport.use(strategy);
//     return {
//         initialize: function() {
//             return passport.initialize();
//         },
//         authenticate: function() {
//             return passport.authenticate("jwt", config.jwtSession);
//         }
//     };
// };

