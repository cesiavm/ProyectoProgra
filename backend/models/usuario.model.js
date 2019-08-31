var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var esquema=new Schema({
    nombre:{type:String,required:true},
    apellidos:{type:String},
    login:{type:String,required:true},
    password:{type:String,required:true},
  tipo:{type:Boolean}
});
module.exports=mongoose.model('Usuario',esquema);