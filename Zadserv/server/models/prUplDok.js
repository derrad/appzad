var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var relationship = require("mongoose-relationship");
var Stavke = require('./server/models/prUplStav');
var FaktDok = require('./server/models/prFaktDok');


var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prUplDok = new Schema({
    FaktDokID:[{type:Schema.ObjectId, ref:"prFaktDok", childPath:"childFaktDok" }],
    TipDok:{ type: String,default:"UPLT",required:true},
    Datum:{type:Date, default: Date.now},
    Broj:{ type: Number,default:1},
    Godina:{ type: Number,default:Date.now.year},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    BrIzvoda:{ type: String},
    Uplaceno:{ type: Number,default:0},
    Fakturisano:{ type: Number,default:0},
    Vrati:{ type: Number,default:0},
    ProcUplate:{ type: Number,default:0},
    Opis:{ type: String },
    Stavke:[{type:Schema.ObjectId, ref:"prUplStav", childPath:"childStavke" }],
    NameUser: {type:String}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);


prUplDok.plugin(relationship, { relationshipPathName:'Stavke' });
var childStavke = new prUplStav({Stavke:prUplStav._id});

prUplDok.plugin(relationship, { relationshipPathName:'FaktDokID' });
var childFaktDok = new prFaktDok({FaktDok:prFaktDok._id});



prUplDok.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE UPLATA dok");
    next();
  });

var collectionName = 'prUplDok';

module.exports = mongoose.model('prUplDok', prUplDok,collectionName); 




//public int FaktDokID { set; get; }

  //      public string TipDok { set; get; }

    //    public DateTime Datum { set; get; }

      //  public int Broj { set; get; }

        //public int Godina { set; get; }

        //public bool Knjizeno { set; get; }

        //public bool Storno { set; get; }

     //   public string BrIzvoda { set; get; }

//        public decimal Uplaceno { set; get; }

       // public decimal Fakturisano { set; get; }

  //      public decimal Vrati { set; get; }

        // public decimal ProcUplate { set; get; }

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

        // #endregion





