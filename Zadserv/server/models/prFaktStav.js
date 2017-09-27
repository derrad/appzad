var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var relationship = require("mongoose-relationship");
var Zadrugar = require('./server/models/sfZadrugar');
var Poslovi = require('./server/models/sfPoslovi');
var UputStav = require('./server/models/prUputStav');
var Zaglavlje = require('./server/models/prFaktDok');
var Schema = mongoose.Schema,
ID  = Schema.ObjectId;

var prFaktStav = new Schema({
    FaktDokID:{ type:Schema.ObjectId, ref:"prFaktDok", childPath:"childFaktDok"}, // ubaci relaciju ka zaglavlju dokumenta
    UputStavID:{type:Schema.ObjectId, ref:"prUputDok", childPath:"childUputStav" }, //ovde ide relacija na zaglavlje dokumenta
    IDZadrugar:{ type: Number,default:0},
    Rbr:{ type: Number,default:1},
    ZadrugarID: {type:Schema.ObjectId, ref:"sfZadrugar", childPath:"childZadrugar" },
    TipZadrugar:{type : String, default : 'Ucenik',required: [true, 'Tip je obavezan !!!'],enum:["Ucenik","Nezaposlen"]},
    PosloviID:{type:Schema.ObjectId, ref:"sfPoslovi", childPath:"chilPoslovi" },
    OdDatuma:{type:Date, default: Date.now},
    DoDatuma:{type:Date, default: Date.now},
    FondSati:{ type: Number,default:0},
    Sati:{ type: Number,default:0},
    Cena:{ type: Number,default:0},
    Neto:{ type: Number,default:0},
    Bruto:{ type: Number,default:0},
    GrandBruto:{ type: Number,default:0},
    UcOsnPorez:{ type: Number,default:0},
    UcPorez:{ type: Number,default:0},
    UcNormTr:{ type: Number,default:0},
    UcOlak:{ type: Number,default:0},
    UcStopPor:{ type: Number,default:0},
    UcOsnDop :{ type: Number,default:0},
    UsStopPio :{ type: Number,default:0},
    UcStopZdrav :{ type: Number,default:0},
    UcPio :{ type: Number,default:0},
    UcZdrav :{ type: Number,default:0},
    OsOsnPorez :{ type: Number,default:0},
    OsStopPor :{ type: Number,default:0},
    OsUmanjPor :{ type: Number,default:0},
    OsPorez :{ type: Number,default:0},
    OsOsnDop :{ type: Number,default:0},
    OsStopPio1 :{ type: Number,default:0},
    OsStopPio2 :{ type: Number,default:0},
    OsPio1 :{ type: Number,default:0},
    OsPio2 :{ type: Number,default:0},
    OsStopZdrav1 :{ type: Number,default:0},
    OsStopZdrav2 :{ type: Number,default:0},
    OsZdrav1 :{ type: Number,default:0},
    OsZdrav2 :{ type: Number,default:0},
    OsStopNez1 :{ type: Number,default:0},
    OsStopNez2 :{ type: Number,default:0},
    OsNez1 :{ type: Number,default:0},
    OsNez2 :{ type: Number,default:0},
    OsMinOsDop :{ type: Number,default:0},
    OsMaxOsDop :{ type: Number,default:0},
    Zadruzi :{ type: Number,default:0},
    ProcZadruzi :{ type: Number,default:0},
    StPDV :{ type: Number,default:0},
    IznosPDV :{ type: Number,default:0},
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
var chilPoslovi = new sfPoslovi({Poslovi:sfPoslovi._id});

prUputStav.plugin(relationship, { relationshipPathName:'UputStavID' });
var childUputStav = new prUputStav({UputStav:prUputStav._id});

prUputStav.plugin(relationship, { relationshipPathName:'FaktDokID' });
var childFaktDok = new prFaktDok({Zaglavlje:prFaktDok._id});



prFaktStav.pre('save', function(next) {
    // do stuff
    console.log("PRE SAVE UputStav");
    next();
  });

var collectionName = 'prFaktStav';

module.exports = mongoose.model('prFaktStav', prFaktStav.collectionName); 


// public int FaktStavID { set; get; }

//         public int FaktDokID { set; get; }
     
     //   public int UputStavID { set; get; }

     ///   public int Rbr { set; get; }

//        public int ZadrugarID { set; get; }

   //     public short TipZadrugar { set; get; }

 //       public int PosloviID { set; get; }

  //      public DateTime OdDatuma { set; get; }

   ///     public DateTime DoDatuma { set; get; }

  //      public decimal FondSati { set; get; }

  //      public decimal Sati { set; get; }

   //     public decimal Cena { set; get; }

  //      public decimal Neto { set; get; }

  //      public decimal Bruto { set; get; }

 //       public decimal GrandBruto { set; get; }

  //      public decimal UcOsnPorez { set; get; }

  //      public decimal UcPorez { set; get; }

  //      public decimal UcNormTr { set; get; }

 //       public decimal UcOlak { set; get; }

 //       public decimal UcStopPor { set; get; }

  //      public decimal UcOsnDop { set; get; }

   //     public decimal UsStopPio { set; get; }

   ///     public decimal UcStopZdrav { set; get; }

    ///    public decimal UcPio { set; get; }

       // public decimal UcZdrav { set; get; }

       // public decimal OsOsnPorez { set; get; }

    //    public decimal OsStopPor { set; get; }

    //    public decimal OsUmanjPor { set; get; }

    //    public decimal OsPorez { set; get; }

    //    public decimal OsOsnDop { set; get; }

    //    public decimal OsStopPio1 { set; get; }

   //     public decimal OsStopPio2 { set; get; }
        
   //     public decimal OsPio1 { set; get; }

   //     public decimal OsPio2 { set; get; }

   //     public decimal OsStopZdrav1 { set; get; }

   //     public decimal OsStopZdrav2 { set; get; }

   //     public decimal OsZdrav1 { set; get; }

   //     public decimal OsZdrav2 { set; get; }

   //     public decimal OsStopNez1 { set; get; }

   //     public decimal OsStopNez2 { set; get; }

   //     public decimal OsNez1 { set; get; }
        
   //     public decimal OsNez2 { set; get; }

   //     public decimal OsMinOsDop { set; get; }

  ///      public decimal OsMaxOsDop { set; get; }

  //      public decimal Zadruzi { set; get; }

//        public decimal ProcZadruzi { set; get; }

 //       public decimal StPDV { set; get; }

   //     public decimal IznosPDV { set; get; }

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

