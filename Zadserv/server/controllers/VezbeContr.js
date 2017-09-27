var mongoose = require('mongoose');
var VzModel = require('../models/Vezba');


module.exports.createPerson = function (req, res,next) {
    const uid = req.params.id ;
    const name = req.body.name ;
    const age = req.body.age ;
   
    console.log("uid je :" + uid + " ovo je sifra " + req.body.name);
   // console.log("radnik_id je :" + radnik_id);
    
    if (!name || !age ) {
        return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:null });
    } else {
    
  if (uid) {
    //Edit radnik
    VzModel.Person.findById(uid).exec(function(err, person){
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
      }
        
      if(person) {
        person.name = name;
        person.age = age;
              
      }
      person.save(function(err,result) {
        if(err){ 
          return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
        }
        return res.status(201).json({
          success: true,
          message: 'Person updated successfully', 
          data:result
        });
      });
    });
  
  }else{
    
    // Add new person
    let oPerson = new VzModel.Person({
        _id: new mongoose.Types.ObjectId(),
        name :name,
        age :age,
      
    });


  
    oPerson.save(function(err,result) {
      if(err){ 
       return  res.status(400).json(
          { success: false, message: 'Error processing request '+ err, data:null });
      }
        

      let oStory = new VzModel.Story({
        author :oPerson._id,
        title :'Test'
      });

     
      oStory.save(function(err,result) {
        if(err){ 
         return  res.status(400).json(
            { success: false, message: 'oStory - save Error processing request '+ err, data:null });
        }
      });  

     return res.status(201).json({
        success: true,
        message: 'Person saved successfully',
        data: result
      });
    });
  
  }
    }
  }
  
  
  
  module.exports.listPerson = function (req, res,next) {
    console.log("Usao u list Person - tu sam");
    VzModel.Person.find({}).exec(function(err, result){
      if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err , data:null}); 
      }
        return res.status(200).json({
        success: true, 
        data: result
        });
      });
  
  }
  
  
  module.exports.getPerson = function (req, res,next) {
    console.log("Usao u list persona - tu sam  " + req.params.id);
    VzModel.Person.find({_id:req.params.id}).exec(function(err, result){
      if(err){ 
        return res.status(400).json(
        { success: false, message:'Error processing request '+ err , data:null }
        ); 
      }
        return res.status(200).json({
        success: true, 
        data: result
        });
      });
  
  }
  
  module.exports.delePerson = function(req, res, next) {
    console.log("parametar je : " + req.params.id);
    VzModel.Person.remove({_id: req.params.id}, function(err){
          if(err){ return res.status(400).json({ success: false, message: 'Error processing request '+ err , data:null}); }
          return res.status(201).json({
              success: true,
              message: 'Person removed successfully', 
              data:null
            });
    });
  }







  module.exports.createStory = function (req, res,next) {
    const uid = req.params.id ;
    const author = req.body.author ;
    const title = req.body.title ;
     
    console.log("uid je :" + uid + " ovo je title " + req.body.title  + " id");
   // console.log("radnik_id je :" + radnik_id);
    
    if (!author || !title ) {
        return res.status(422).send({ success: false, message: 'Posted data is not correct or incompleted.', data:null });
    } else {
    
  if (uid) {
    //Edit story
    VzModel.Story.findById(uid).exec(function(err, story){
      if(err){ 
        return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
      }
        
      if(story) {
        story.author = author;
        story.title = title;
              
      }
      story.save(function(err,result) {
        if(err){ 
          return res.status(400).json({ success: false, message: 'Error processing request '+ err, data:null }); 
        }
        return res.status(201).json({
          success: true,
          message: 'Store updated successfully', 
          data:result
        });
      });
    });
  
  }else{
    

    // Add new Story
    let oStory = new VzModel.Story({
        author :author,
        title :title,

      
    });


  
    oStory.save(function(err,result) {
      if(err){ 
       return  res.status(400).json(
          { success: false, message: 'Error processing request '+ err, data:null });
      }
        
     return res.status(201).json({
        success: true,
        message: 'Store saved successfully',
        data: result
      });
    });
  
  }
    }
  }


  
module.exports.listStory = function (req, res,next) {
    console.log("Usao u list Story");
    
    VzModel.Story.find({}).populate('author').exec(function(err, result){
      if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err, data:[] }); 
      }
     // console.log( "Hvatam ga " +  result.Drzava.Naziv);
        return res.status(200).json({
        success: true,
        message:'Successfully', 
        data: result
        });
      });
  
  }