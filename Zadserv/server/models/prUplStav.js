var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var Zadrugar = require('./server/models/sfZadrugar');
var FaktureStav = require('./server/models/prFaktStav');
var Zaglavlje = require('./server/models/prUplDok');

var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prUplStav = new Schema({
    UplDokID :{type:Schema.ObjectId, ref:"prUplDok", childPath:"chilDokum" }, // ubaci relaciju ka zaglavlju dokumenta
    FaktStavID :{type:Schema.ObjectId, ref:"prFaktStav", childPath:"childFaktStav" }, //ovde ide relacija na zaglavlje dokumenta
    IDZadrugar:{ type: Number,default:0},
    Rbr:{ type: Number,default:1},
    ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar", childPath:"childZadrugar" },
    TipZadrugar:{type : String, default : 'Ucenik',required: [true, 'Tip je obavezan !!!'],enum:["Ucenik","Nezaposlen"]},
    ProcUplate:{ type: Number,default:0},
    UNeto :{ type: Number,default:0},
    UBruto :{ type: Number,default:0},
    UGrandBruto :{ type: Number,default:0},
    UUcPorez :{ type: Number,default:0},
    UUcPio :{ type: Number,default:0},
    UUcZdrav :{ type: Number,default:0},
    UOsPorez :{ type: Number,default:0},
    UOsPio1 :{ type: Number,default:0},
    UOsPio2 :{ type: Number,default:0},
    UOsZdrav1 :{ type: Number,default:0},
    UOsZdrav2 :{ type: Number,default:0},
    UOsNez1 :{ type: Number,default:0},
    UOsNez2 :{ type: Number,default:0},
    UZadruzi :{ type: Number,default:0},
    UIznosPDV :{ type: Number,default:0},
    ProcZadruzi :{ type: Number,default:0},
    Opis:{ type: String },
    NameUser: {type:String}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);

prUplStav.plugin(relationship, { relationshipPathName:'ZadrugarID' });
var childZadrugar = new sfZadrugar({Zadrugar:sfZadrugar._id});

prUplStav.plugin(relationship, { relationshipPathName:'UplDokID' });
var chilDokum = new prUplDok({Zaglavlje:prUplDok._id});

prUplStav.plugin(relationship, { relationshipPathName:'FaktStavID' });
var childFaktStav = new prFaktStav({FaktureStav:prFaktStav._id});



prUplStav.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE Uplata stav");
    next();
  });

var collectionName = 'prUplStav';

module.exports = mongoose.model('prUplStav', prUplStav.collectionName); 


// [Table("prUplStav")]
// public class prUplStav : IprUplStav
// {
//     #region IprUplStav Members

//     [Key]
//     [ScaffoldColumn(false)]
//     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//     public int UplStavID { set; get; }

//     public int UplDokID { set; get; }

//     public int prFaktStavID { set; get; }

   // public int Rbr { set; get; }

   // public int ZadrugarID { set; get; }

  //  public short TipZadrugar { set; get; }

 //   public decimal ProcUplate { set; get; }

 //   public decimal UNeto { set; get; }

//     public decimal UBruto { set; get; }

//     public decimal UGrandBruto { set; get; }

//     public decimal UUcPorez { set; get; }

//     public decimal UUcPio { set; get; }

//     public decimal UUcZdrav { set; get; }

//     public decimal UOsPorez { set; get; }

//     public decimal UOsPio1 { set; get; }

//     public decimal UOsPio2 { set; get; }

//     public decimal UOsZdrav1 { set; get; }

//     public decimal UOsZdrav2 { set; get; }

//     public decimal UOsNez1 { set; get; }

//     public decimal UOsNez2 { set; get; }

//     public decimal UZadruzi { set; get; }

//     public decimal UIznosPDV { set; get; }

//     public decimal ProcZadruzi { set; get; }

//     [ScaffoldColumn(false)]
//     public DateTime? DatCreate { set; get; }

//     [ScaffoldColumn(false)]
//     public int? Uneo { set; get; }
    
//     [ScaffoldColumn(false)]
//     public string NameUser { set; get; }
    
//     [ScaffoldColumn(false)]
//     public DateTime? DatUpdate { set; get; }

//     [Timestamp]
//     [ConcurrencyCheck]
//     [ScaffoldColumn(false)]
//     public byte[] Timestamp { set; get; }

//     #endregion
// }
