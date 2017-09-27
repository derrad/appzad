var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var relationship = require("mongoose-relationship");
var Partner = require('./server/models/sfPartneri');
var Stavke = require('./server/models/prFaktStav');
var Mesta = require('./server/models/sfMesta');
var Radnik = require('./server/models/sfRadnik');
var UputDok = require('./server/models/prUputDok');


var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prFaktDok = new Schema({
    UputDokID:[{type:Schema.ObjectId, ref:"prUputDok", childPath:"childUputDok" }],
    PartneriID:{type:Schema.ObjectId, ref:"sfPartner", childPath:"childPartner" },
    TipDok:{ type: String,default:"FAKT",required:true},
    Datum:{type:Date, default: Date.now},
    DatValute:{type:Date, default: Date.now},
    Knjizeno:{type:Boolean,default:false},
    Storno:{type:Boolean,default:false},
    Broj:{ type: Number,default:1},
    Godina:{ type: Number,default:Date.now.year},
    RacVlasnika:{ type: String},
    Opis:{ type: String },
    PorOslob:{ type: String },
    DatPromOd:{type:Date, default: Date.now},
    DatPromDo:{type:Date, default: Date.now},    
    MestaID:{type:Schema.ObjectId, ref:"sfMesta", childPath:"childMesta" },
    FakturisaoID:{type:Schema.ObjectId, ref:"sfRadnik", childPath:"childFakturisao" },
    KontrolisaoID:{type:Schema.ObjectId, ref:"sfRadnik", childPath:"childKontrolisao" },
    Stavke:[{type:Schema.ObjectId, ref:"prFaktStav", childPath:"childStavke" }],
    NameUser: {type:String}
    },
    {
    timestamps: { createdAt: 'created_at' }
    },
    { 
    retainKeyOrder: true 
    }
);


prFaktDok.plugin(relationship, { relationshipPathName:'Stavke' });
var childStavke = new prFaktStav({Stavke:prFaktStav._id});

prFaktDok.plugin(relationship, { relationshipPathName:'MestaID' });
var childMesta= new sfMesta({Mesta:sfMesta._id});

prFaktDok.plugin(relationship, { relationshipPathName:'FakturisaoID' });
var childFakturisao= new sfRadnik({Radnik:sfMesta._id});

prFaktDok.plugin(relationship, { relationshipPathName:'KontrolisaoID' });
var childKontrolisao= new sfRadnik({Radnik:sfMesta._id});

prFaktDok.plugin(relationship, { relationshipPathName:'PartneriID' });
var childPartner = new sfPartner({Partner:sfPartner._id});

prFaktDok.plugin(relationship, { relationshipPathName:'UputDokID' });
var childUputDok = new prUputDok({UputDok:prUputDok._id});



prFaktDok.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE Fakt dok");
    next();
  });



  prFaktDok.plugin(mongoosePaginate);

module.exports = mongoose.model('prFaktDok', prFaktDok,collectionName); //mongoose.model('sfDrzave', sfDrzave);




// [Table("prFaktDok")]
// public class prFaktDok:IprFaktDok 
// {

//     #region IprFaktDok Members

//     [Key]
//     [ScaffoldColumn(false)]
//     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
 //   public int FaktDokID { set; get; }
    
 //   public int UputDokID { set; get; }

  //  public int PartneriID { set; get; }

 //   public string TipDok { set; get; }

 //   public DateTime Datum { set; get; }
    
  //  public DateTime DatValute { set; get; }

  //  public bool Knjizeno { set; get; }

 //   public bool Storno { set; get; }
   
    // public int Broj { set; get; }

    // public int Godina { set; get; }

    // public string RacVlasnika { set; get; }

    // [DataType(DataType.MultilineText)]
    // public string Opis { set; get; }
    
    // [DataType(DataType.MultilineText)]
    // public string PorOslob { set; get; }

    // public DateTime DatPromOd { set; get; }

    // public DateTime DatPromDo { set; get; }

//    public int MestaID { set; get; }

    // public int FakturisaoID { set; get; }

    // public int KontrolisaoID { set; get; }

    
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



