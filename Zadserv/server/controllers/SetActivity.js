const LogAct = require('../models/apActlog');
const TypeA = require('../enum/serverenum');

module.exports.AddActivity = function (tActivnost,tTrans,tNumber,topis, tuser) {
    let oLogNew = new LogAct({
        TypeAct:tActivnost || TypeA.Activities[0], // ; Start,
        Transact:tTrans,
        TransactNumber:tNumber,
        Opis:topis,
        NameUser:tuser
      });
      LogAct.addLog(oLogNew, (err, logNew) => {
         if(err){
           console.log("Error add aktivnost");
   
         } else {
           console.log("add aktivnost successfully");
         }
      });

}