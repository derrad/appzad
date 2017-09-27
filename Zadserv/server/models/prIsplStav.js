var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');

var Zadrugar = require('./server/models/sfZadrugar');
var Zaglavlje = require('./server/models/prIsplDok');
var UplStav = require('./server/models/prUplStav');
var FaktStav = require('./server/models/prFaktStav');

var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prIsplStav = new Schema({
    IsplDokID:{ type:Schema.ObjectId, ref:"prIsplDok", childPath:"childIsplDok"}, // ubaci relaciju ka zaglavlju dokumenta
    IDZadrugar:{ type: Number,default:0},
    Rbr:{ type: Number,default:1},
    ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar", childPath:"childZadrugar" },
    TipZadrugar:{type : String, default : 'Ucenik',required: [true, 'Tip je obavezan !!!'],enum:["Ucenik","Nezaposlen"]},
    prUplStavID:{type:Schema.ObjectId, ref:"prUplStav", childPath:"chilUplStav" },
    prFaktStavID:{type:Schema.ObjectId, ref:"prFaktStav", childPath:"childFaktStav" },
    BrFakt:{ type: Number,default:0},
    Neto :{ type: Number,default:0},
    Bruto :{ type: Number,default:0},
    GrandBruto :{ type: Number,default:0},
    UcPorez :{ type: Number,default:0},
    UcPio :{ type: Number,default:0},
    UcZdrav :{ type: Number,default:0},
    OsOsnPorez :{ type: Number,default:0},
    OsPorez :{ type: Number,default:0},
    OsOsnDop :{ type: Number,default:0},
    OsPio1 :{ type: Number,default:0},
    OsPio2 :{ type: Number,default:0},
    OsZdrav1 :{ type: Number,default:0},
    OsZdrav2 :{ type: Number,default:0},
    OsNez1 :{ type: Number,default:0},
    OsNez2 :{ type: Number,default:0},
    Clanarin :{ type: Number,default:0},
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


prUputStav.plugin(relationship, { relationshipPathName:'ZadrugarID' });
var childZadrugar = new sfZadrugar({Zadrugar:sfZadrugar._id});

prUputStav.plugin(relationship, { relationshipPathName:'prUplStavID' });
var chilUplStav = new prUplStav({UplStav:prUplStav._id});

prUputStav.plugin(relationship, { relationshipPathName:'prFaktStavID' });
var childFaktStav = new prFaktStav({FaktStav:prFaktStav._id});

prUputStav.plugin(relationship, { relationshipPathName:'FaktDokID' });
var childIsplDok = new prIsplDok({Zaglavlje:prIsplDok._id});



prIsplStav.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE UputStav");
    next();
  });

var collectionName = 'prIsplStav';

module.exports = mongoose.model('prIsplStav', prIsplStav.collectionName); 


// [Key]
// [ScaffoldColumn(false)]
// [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
// public int IsplStavID { set; get; }
      
// public int IsplDokID { set; get; }

//public int Rbr { set; get; }

//public int ZadrugarID { set; get; }

//public short TipZadrugar { set; get; }

// public int? prUplStavID { set; get; }

// public int prFaktStavID { set; get; }

//public int BrFakt { set; get; }

//  Neto :{ type: Number,default:0},

//  Bruto :{ type: Number,default:0},

//  GrandBruto :{ type: Number,default:0},

//  UcPorez :{ type: Number,default:0},

//  UcPio :{ type: Number,default:0},

//  UcZdrav :{ type: Number,default:0},

//  OsOsnPorez :{ type: Number,default:0},

//  OsPorez :{ type: Number,default:0},

//  OsOsnDop :{ type: Number,default:0},

//  OsPio1 :{ type: Number,default:0},

//  OsPio2 :{ type: Number,default:0},

//  OsZdrav1 :{ type: Number,default:0},

//  OsZdrav2 :{ type: Number,default:0},

//  OsNez1 :{ type: Number,default:0},

//  OsNez2 :{ type: Number,default:0},

//  Clanarin :{ type: Number,default:0},

// [DataType(DataType.MultilineText)]
// public string Opis { set; get; }

// [ScaffoldColumn(false)]
// public DateTime? DatCreate { set; get; }

// [ScaffoldColumn(false)]
// public int? Uneo { set; get; }

// [ScaffoldColumn(false)]
// public string NameUser { set; get; }

// [ScaffoldColumn(false)]
// public DateTime? DatUpdate { set; get; }

// [Timestamp]
// [ConcurrencyCheck]
// [ScaffoldColumn(false)]
// public byte[] Timestamp { set; get; }

//#endregion


