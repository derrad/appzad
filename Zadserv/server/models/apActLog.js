const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TypeA = require('../enum/serverenum');
         
var apActLog = new Schema({
   Datum:{type:Date, default: Date.now}, // datum kada se aktivnost dogodila
   NameUser: {type:String}, // ime usera upisivacemo email
   TypeAct  :  {
    type : String,
    default : 'Start',
    enum : TypeA.Activities
   }, // tip aktivnosti
   Transact:{type:String,default:"SYSTEM ERROR"}, // dokument tip
   TransactNumber:{type:String}, // broj dokumenta
   Opis  :{ type: String },
   
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
           newLog.save(callback);
}
    

// module.exports.AddActivity = function (tActivnost,tTrans, tNumber,topis, tuser){
//     let oLog = new apActLog({
//       TypeAct:tActivnost,
//       Transact:tTrans,
//       TransactNumber:tNumber,
//       Opis:topis,
//       NameUser:tuser
//     });
  
//     oLog.save(function(err,result) {
//       if(err){ 
//         if(err.errmsg){res.statusMessage = err.errmsg; }else{res.statusMessage = err; }
//         console.log("Error add aktivnost");
//       }
        
//       console.log("add aktivnost successfully");
//     });
  
//   }