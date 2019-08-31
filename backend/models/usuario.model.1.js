var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var esquema=new Schema({
   latitud:{type:String,required:true},
    longitud:{type:String},
    fraternidad:{
        comentario:String,
        nombre:String,

    },
    fecha:{type:Date},
     hora:{type:String},
     fotos:[{
foto:Image,

     }],
     estado:{type:String}
});
module.exports=mongoose.model('Ubicacion',esquema);