const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
      //  console.log("pre pravljena jwt.sign");
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + ((60 * 60) * 180),
          data: user
        }, config.secret);

        // const token = jwt.sign({
        //   exp: Math.floor(Date.now() / 1000) + (60 * 60),
        //   data: user
        // }, config.secret);

        // const token = jwt.sign(user, config.secret, {
        //   expiresIn: 604800 // 1 week
        // });

     //   console.log("posle pravljena jwt.sign");
        res.json({
          success: true,
          token: 'JWT '+ token, 
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router; 


// function generateGUID() {
//   return new Date().getTime(); // we can do better with crypto
// }


// // Register
// router.post('/register', (req, res, next) => {
//   let newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password
//   });

//   User.addUser(newUser, (err, user) => {
//     if(err){
//       res.json({success: false, msg:'Failed to register user'});
//     } else {
//       res.json({success: true, msg:'User registered'});
//     }
//   });
// });

// // Authenticate
// router.post('/authenticate', (req, res, next) => {
//   //console.log('usao u authenticate');
//   const username = req.body.username;
//   const password = req.body.password;

//   User.getUserByUsername(username, (err, user) => {
//     if(err) throw err;
//     if(!user){
//       return res.json({success: false, msg: 'User not found'});
//     }

//     User.comparePassword(password, user.password, (err, isMatch) => {
//       if(err) throw err;
//       if(isMatch){
//         //console.log("pasword je ok");
//         var expiresDefault = Math.floor(new Date().getTime()/1000) + 7*24*60*60;
//         var GUID = generateGUID();
//           const token = jwt.sign({
//             auth:  user,
//             agent: req.headers['user-agent'],
//             exp:   expiresDefault
//           }, config.secret);

//          //var token = jwt.sign(user, config.secret, { expiresInMinutes: 60*1 });
//         //  const token = jwt.sign(user, config.secret, {
//         //    expiresIn: 604800 // 1 week
//         //  });

//        // const token = jwt.sign(user.name,{expiresIn:60480},config.secret);

//         res.json({
//           success: true,
//           token: 'JWT '+token,
//          // token: 'bearer '+token,
//           user: {
//             id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//           }
//         });
//       } else {
//         return res.json({success: false, msg: 'Wrong password',user:{}});
//       }
//     });
//   });
// });

// // Profile
// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });

// module.exports = router;
