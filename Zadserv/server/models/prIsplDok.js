var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var Stavke = require('./server/models/prIsplStav');


var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prIsplDok = new Schema({
    FaktDokID:[{type:Schema.ObjectId, ref:"prFaktDok", childPath:"childFaktDok" }],
    TipDok:{ type: String,default:"ISPL",required:true},
    Datum:{type:Date, default: Date.now},
    Broj:{ type: Number,default:1},
    Godina:{ type: Number,default:Date.now.year},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Opis:{ type: String },
    Stavke:[{type:Schema.ObjectId, ref:"prIsplStav", childPath:"childStavke" }],
    NameUser: {type:String}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);


prIsplDok.plugin(relationship, { relationshipPathName:'Stavke' });
var childStavke = new prIsplStav({Stavke:prIsplStav._id});

prIsplDok.plugin(relationship, { relationshipPathName:'FaktDokID' });
var childFaktDok = new prFaktDok({FaktDok:prFaktDok._id});



prIsplDok.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE ISPLATE dok");
    next();
  });

var collectionName = 'prIsplDok';

module.exports = mongoose.model('prIsplDok', prIsplDok,collectionName); 


// #region IprIsplDok Members

//         [Key]
//         [ScaffoldColumn(false)]
//         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//         public int IsplDokID { set; get; }
        
//         public string TipDok { set; get; }

   //     public DateTime Datum { set; get; }

     //   public int Broj { set; get; }

     //   public int Godina { set; get; }

    //    public bool Storno { set; get; }
        
  //      [DataType(DataType.MultilineText)]
  //      public string Opis { set; get; }

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

        