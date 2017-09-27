var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var mongoosePaginate = require('mongoose-paginate');
var Drzave = require('./server/models/sfDrzave');
var Mesta = require('./server/models/sfMesta');
var Zanimanja = require('./server/models/sfZanimanja');
var Partner = require('./server/models/sfPartneri');




var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var sfZadrugar = new Schema({
    IDZadrugar:{ type: Number,default:0},
    Ime:{type:String,required: [true, 'Ime je obavezno !!!']},
    Prezime : { type: String, required: [true, 'Prezime je obavezno !!!'] },
    ImeRoditelja : { type: String},
    DatRodjenja:{type:Date, default: Date.now,required: [true, 'Datum je obavezan !!!']},
    Aktivan:{type:Boolean,default:false},
    Pol:{type : String, default : 'Neodredjen',required: [true, 'Pol je obavezan !!!'],enum:["Musko","Zensko","Neodredjen"]},
    OpstinaRodj : { type: String},
    MestoRodj: { type: String},
    VrstaIdentifikatoraPrimaoca:{type : String, default : 'Jmbg',required: [true, 'Idendifikator je obavezan !!!'],enum:["Jmbg","Zensko","Neodredjen"]},
    Jmbg:{ type: String},
    Adresa:{ type: String},
    BrLK:{ type: String},
    Telefon:{ type: String},
    ZadEmail:{ type: String},
    MestaID:{type:Schema.ObjectId, ref:"sfMesta", childPath:"childMesta" },
    ZanimanjaID:{type:Schema.ObjectId, ref:"sfZanimanja", childPath:"childZanimanja" },
    TipZadrugar:{type : String, default : 'Ucenik',required: [true, 'Tip je obavezan !!!'],enum:["Ucenik","Nezaposlen"]},
    BrRadneKnjiz:{ type: String},
    BrIndexa:{ type: String},
    TipIsplate:{type : String, default : 'Gotovina',required: [true, 'Tip je obavezan !!!'],enum:["Gotovina","Tekuci","Stedna"]},
    PartneriID:{type:Schema.ObjectId, ref:"sfPartner", childPath:"childPartner" },
    BrojRacuna:{ type: String},
    BeliBroj:{ type: String},
    BrojDana:{ type: Number,default:0},
    Slika:{ type: String},
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



sfZadrugar.plugin(relationship, { relationshipPathName:'MestaID' });
var childMesta = new sfOpstine({Mesta:sfMesta._id});

sfZadrugar.plugin(relationship, { relationshipPathName:'ZanimanjaID' });
var childZanimanja = new sfZanimanja({Zanimanja:sfZanimanja._id});


sfZadrugar.plugin(relationship, { relationshipPathName:'PartneriID' });
var childPartner = new sfPartner({Partner:sfPartner._id});


sfZadrugar.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE zadrugar");
    next();
  });


sfZadrugar.plugin(mongoosePaginate);

var collectionName = 'sfZadrugar';

module.exports = mongoose.model('sfZadrugar', sfZadrugar,collectionName); //mongoose.model('sfDrzave', sfDrzave);


// public class sfZadrugar : IsfZadrugar
// {
//     Ime: { type:Schema.ObjectId, ref:"sfDrzave", childPath:"child" },

//     #region IsfZadrugar Members
    
//     [Key]
//     [ScaffoldColumn(false)]
//     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//     public int ZadrugarID { set; get; }

    // [Column("Ime", Order = 1)]
    // public string Ime { set; get; }

    // [Column("Prezime", Order = 2)]
    // public string Prezime { set; get; }

    // [Column("ImeRoditelja", Order = 3)]
    // public string ImeRoditelja  { set; get; }

    // [Column("DatRodjenja", Order = 4)]
    // public DateTime DatRodjenja{ set; get; }

    // [Column("Aktivan", Order = 5)]
    // public bool Aktivan { set; get; }

    // [Column("Pol", Order = 6)]
    // public short Pol { set; get; }

    // [Column("OpstinaRodj", Order = 7)]
    // public string OpstinaRodj { set; get; }

    // [Column("MestoRodj", Order = 8)]
    // public string MestoRodj { set; get; }

    // [Column("VrstaIdentifikatoraPrimaoca", Order = 9)]
    // public short VrstaIdentifikatoraPrimaoca { set; get; }

    // [Column("Jmbg", Order = 10)]
    // public string Jmbg { set; get; }

    // [Column("Adresa", Order = 11)]
    // public string Adresa { set; get; }

    // [Column("BrLK", Order = 12)]
    // public string BrLK { set; get; }

    // [Column("Telefon", Order = 13)]
    // public string Telefon { set; get; }

    // [Column("ZadEmail", Order = 14)]
    // public string ZadEmail { set; get; }

    // [Column("MestaID", Order = 15)]
    // public int MestaID { set; get; }

    // public virtual sfMesta Mesta { set; get; }

    // [Column("ZanimanjaID", Order = 16)]
    // public int ZanimanjaID { set; get; }

    // public virtual sfZanimanja Zanimanja { set; get; }

    // [Column("TipZadrugar", Order = 17)]
  //  public short TipZadrugar { set; get; }

    // [Column("BrRadneKnjiz", Order = 18)]
    // public string BrRadneKnjiz{ set; get; }

    // [Column("BrIndexa", Order = 19)]
    // public string BrIndexa { set; get; }

    // [Column("TipIsplate", Order = 20)]
    // public short TipIsplate { set; get; }

    // [Column("PartneriID", Order = 21)]
    // public int PartneriID { set; get; }

    // public virtual sfPartneri Partneri { set; get; }

    // [Column("BrojRacuna", Order = 22)]
    // public string BrojRacuna { set; get; }

    // [Column("BeliBroj", Order = 23)]
    // public string BeliBroj { set; get; }

    // [Column("BrojDana", Order = 24)]
    // public int BrojDana { set; get; }

//     public byte[] Slika { set; get; }

//     [DataType(DataType.MultilineText)]
//     [Column("Opis", Order = 25)]
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

// }
// }
