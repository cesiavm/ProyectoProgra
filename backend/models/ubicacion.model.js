var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var esquema=new Schema({
    latitud:{type:String},
    longitud:{type:String},
    fraternidad:{type:String},
   
   hora:{type:String},
    dia:{type:Date},
    Estado:{type:String},
    comentario_fraternidad:{type:String},
    comentario_general:{type:String}
});
module.exports=mongoose.model('Ubicacion',esquema);