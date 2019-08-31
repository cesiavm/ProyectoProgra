var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var esquema=new Schema({
    nombre:{type:String},
    institucion:{type:String},
 
        piefoto:String,
        foto:String,
  
    presidente:{ type:String},
    delegado:{  type:String},
    reina:{ type:String},

    Cantidad:{type:Number},
    danza:{type:String},
    descripcion:{type:String},
     dia:{type:Date},
    dipo_danza:{type:String},
     estado :{type:Boolean},
     comentarios:[
         {comentario:String,
         nombreUsuario:String,
         Fecha:Date
        }
     ]
});
module.exports=mongoose.model('Fraternidad',esquema);