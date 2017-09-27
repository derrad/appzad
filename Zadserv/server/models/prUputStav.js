var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var Zadrugar = require('./server/models/sfZadrugar');
var Poslovi = require('./server/models/sfPoslovi');
var Zaglavlje = require('./server/models/prUputDok');



var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prUputStav = new Schema({
    UputDokID:{type:Schema.ObjectId, ref:"prUputDok", childPath:"childDok" }, //ovde ide relacija na zaglavlje dokumenta
    IDZadrugar:{ type: Number,default:0},
    Rbr:{ type: Number,default:1},
    ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar", childPath:"childZadrugar" },
    TipZadrugar:{type : String, default : 'Ucenik',required: [true, 'Tip je obavezan !!!'],enum:["Ucenik","Nezaposlen"]},
    PosloviID:{type:Schema.ObjectId, ref:"sfPoslovi", childPath:"childPoslovi" },
    UkupZarada:{ type: Number,default:0},
    OdDatuma:{type:Date, default: Date.now},
    DoDatuma:{type:Date, default: Date.now},
    Kolicina:{ type: Number,default:1},
    JedMer:{ type: String},
    Cena:{ type: Number,default:0},
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

prUputStav.plugin(relationship, { relationshipPathName:'PosloviID' });
var childPoslovi = new sfPoslovi({Poslovi:sfPoslovi._id});

prUputStav.plugin(relationship, { relationshipPathName:'UputDokID' });
var childDok = new prUputDok({Zaglavlje:prUputDok._id});




prUputStav.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE UputStav");
    next();
  });

var collectionName = 'prUputStav';

module.exports = mongoose.model('prUputStav', prUputStav,collectionName); //mongoose.model('sfDrzave', sfDrzave);


// [Table("prUputStav")]
// public class prUputStav:IprUputStav
// {

//     #region IprUputStav Members

//     [Key]
//     [ScaffoldColumn(false)]
//     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//     public int UputStavID { set; get; }

//     public int UputDokID { set; get; }

//     public int Rbr { set; get; }

    // public int ZadrugarID { set; get; }

    // public virtual sfZadrugar Zadrugar { set; get; }

    // public short TipZadrugar { set; get; }

    // public int PosloviID { set; get; }

    // public virtual sfPoslovi Poslovi { set; get; }
    
    // public decimal UkupZarada { set; get; }

    // public DateTime? OdDatuma { set; get; }

    // public DateTime? DoDatuma { set; get; }

    // public decimal? Kolicina { set; get; }

 //   public string JedMer{ set; get; }

    // public decimal? Cena { set; get; }

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

