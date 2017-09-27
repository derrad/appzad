var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfKonstanta = new Schema({
    Datum:{type:Date, default: Date.now,required: [true, 'Datum je obavezan !!!']},
    UcPenz:{ type: Number,default:0,required:true},
    UcZdrav:{ type: Number,default:0,required:true},
    UcNormTr:{ type: Number,default:0,required:true},
    UcOlak:{ type: Number,default:0,required:true},
    UcPorez:{ type: Number,default:0,required:true},
    Pdv:{ type: Number,default:0,required:true},
    Clanarin:{ type: Number,default:0,required:true},
    OsPorez:{ type: Number,default:0,required:true},
    OsUmanjen:{ type: Number,default:0,required:true},
    OsPio1:{ type: Number,default:0,required:true},
    OsPio2:{ type: Number,default:0,required:true},
    OsZdrav1:{ type: Number,default:0,required:true},
    OsZdrav2:{ type: Number,default:0,required:true},
    OsNez1:{ type: Number,default:0,required:true},
    OsNez2:{ type: Number,default:0,required:true},
    OsMinOsDop:{ type: Number,default:0,required:true},
    OsMaxOsDop:{ type: Number,default:0,required:true},
    Opis  :{ type: String },
    NameUser: {type:String}
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}

);

sfKonstanta.pre('save', function(next) {
   // do stuff
   console.log("sfKonstanta PRE SAVE");
   next();
 });

sfKonstanta.plugin(mongoosePaginate);

var collectionName = 'sfKonstanta';

module.exports = mongoose.model('sfKonstanta', sfKonstanta,collectionName);




// #region IsfKonstanta Members

//         [Key]
//         [ScaffoldColumn(false)]
//         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//         public int KonstantaID { set; get; }

//         [Column("Datum", Order = 1)]
//         public DateTime Datum { set; get; }

//         [Column("UcPenz", Order = 2)]
//         public decimal UcPenz { set; get; }

//         [Column("UcZdrav", Order = 3)]
//         public decimal UcZdrav{ set; get; }

        // [Column("UcNormTr", Order = 4)]
        // public decimal UcNormTr { set; get; }

        // [Column("UcOlak", Order = 5)]
        // public decimal UcOlak { set; get; }

        // [Column("UcPorez", Order = 6)]
        // public decimal UcPorez { set; get; }

        // [Column("Pdv", Order = 7)]
        // public decimal Pdv { set; get; }

        // [Column("Clanarin", Order = 8)]
        // public decimal Clanarin { set; get; }

        // [Column("OsPorez", Order = 9)]
        // public decimal OsPorez { set; get; }

        // [Column("OsUmanjen", Order = 10)]
        // public decimal OsUmanjen { set; get; }

        // [Column("OsPio1", Order = 11)]
        // public decimal OsPio1 { set; get; }

        // [Column("OsPio2", Order = 12)]
        // public decimal OsPio2{ set; get; }

        // [Column("OsZdrav1", Order = 13)]
        // public decimal OsZdrav1 { set; get; }

        // [Column("OsZdrav2", Order = 14)]
        // public decimal OsZdrav2 { set; get; }

        // [Column("OsNez1", Order = 15)]
        // public decimal OsNez1 { set; get; }

        // [Column("OsNez2", Order = 16)]
        // public decimal OsNez2{ set; get; }

        // [Column("OsMinOsDop", Order = 17)]
        // public decimal OsMinOsDop { set; get; }

        // [Column("OsMaxOsDop", Order = 18)]
        // public decimal OsMaxOsDop { set; get; }


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


