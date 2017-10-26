var mongoose = require('mongoose');
var Schema = mongoose.Schema;
         
var apActLog = new Schema({
   Transact:{type:String,default:"SYSTEM ERROR"},
   Opis  :{ type: String },
   NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}

);


module.exports = mongoose.model('apActLog', apActLog,'apActLog'); 

module.exports.addLog = function(newLog, callback){
           newUser.save(callback);
}
    

module.exports.AddActivity = function (tactivnost,topis, tuser){
    let oLog = new apActLog({
      Transact:tactivnost,
      Opis:topis,
      NameUser:tuser
    });
  
    oLog.save(function(err,result) {
      if(err){ 
        if(err.errmsg){res.statusMessage = err.errmsg; }else{res.statusMessage = err; }
        console.log("Error add aktivnost");
      }
        
      console.log("add aktivnost successfully");
    });
  
  }