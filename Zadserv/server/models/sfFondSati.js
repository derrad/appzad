var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

 var Schema = mongoose.Schema,
     ID  = Schema.ObjectId;

var sfFondSati = new Schema({
    Mesec:{ type: Number,default:1,required:true, min: 1, max: 12,validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }},
    Godina:{ type: Number,default:1,required:true, min: 2000, max: 2030, validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }},
    Sati:{ type: Number,default:0,required:true,min: 0, max: 248,validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }},
    MinOsnov:{ type: Number,default:0,required:true,min: 0},
    MaxOsnov:{ type: Number,default:0,required:true,min: 0},
    Opis  :{ type: String,trim: true },
    NameUser: {type:String,trim: true}
},
{
 timestamps: { createdAt: 'created_at' }
},
{ 
    retainKeyOrder: true 
}

);

// sfFondSati.pre('save', function(next) {
//    // do stuff
//    console.log("sfFondSati PRE SAVE");
//    next();
//  });

sfFondSati.index({Mesec: 1, Godina: 1}, {unique: true});
 
sfFondSati.plugin(mongoosePaginate);

// var collectionName = 'sfFondSati';

module.exports = mongoose.model('sfFondSati', sfFondSati,'sfFondSati');


// #region IsfFondSati Members

//         [Key]
//         [ScaffoldColumn(false)]
//         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//         public int FondSatiID { set; get; }

        // [Column("Mesec", Order = 1)]
        // public int Mesec { set; get; }

        // [Column("Godina", Order = 2)]
        // public int Godina { set; get; }

        // [Column("Sati", Order = 3)]
        // public decimal Sati { set; get; }

        // [Column("MinOsnov", Order = 4)]
        // public decimal MinOsnov { set; get; }

        // [Column("MaxOsnov", Order = 5)]
        // public decimal MaxOsnov { set; get; }




        // [DataType(DataType.MultilineText)]
        // [Column("Opis", Order = 6)]
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

