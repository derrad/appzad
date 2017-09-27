var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var Poslovi = require('./server/models/sfPoslovi');
var Partner = require('./server/models/sfPartneri');
var Stavke = require('./server/models/prUputStav');


var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prUputDok = new Schema({
    PartneriID:{type:Schema.ObjectId, ref:"sfPartner", childPath:"childPartner" },
    TipDok:{ type: String,default:"UPUT",required:true},
    Datum:{type:Date, default: Date.now},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Broj:{ type: Number,default:1},
    Godina:{ type: Number,default:Date.now.year},
    RacVlasnika:{ type: String},
    PosloviID:{type:Schema.ObjectId, ref:"sfPoslovi", childPath:"chilPoslovi" },
    Stavke:[{type:Schema.ObjectId, ref:"prUputStav", childPath:"childStavke" }],
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


prUputDok.plugin(relationship, { relationshipPathName:'Stavke' });
var childStavke = new prUputStav({Stavke:prUputStav._id});

prUputDok.plugin(relationship, { relationshipPathName:'PosloviID' });
var chilPoslovi = new sfPoslovi({Poslovi:sfPoslovi._id});

prUputDok.plugin(relationship, { relationshipPathName:'PartneriID' });
var childPartner = new sfPartner({Partner:sfPartner._id});

prUputDok.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE UputDok");
    next();
  });

var collectionName = 'prUputDok';

module.exports = mongoose.model('prUputDok', prUputDok,collectionName); //mongoose.model('sfDrzave', sfDrzave);


// #region IprUputDok Members

//         [Key]
//         [ScaffoldColumn(false)]
//         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//         public int UputDokID { set; get; }
        
//         public int PartneriID { set; get; }

//         public virtual sfPartneri Partneri { set; get; }
        
       // public string TipDok { set; get; }

      //  public DateTime Datum { set; get; }

 //      public bool Knjizeno { set; get; }

   //     public bool Storno { set; get; }

//        public int Broj { set; get; }

//        public int Godina { set; get; }

    //     public string RacVlasnika { set; get; }
        
    //     [DataType(DataType.MultilineText)]
    //     public string Opis { set; get; }

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

    //     public List<prUputStav> UputStav { get; set; }
       
              
    // }
