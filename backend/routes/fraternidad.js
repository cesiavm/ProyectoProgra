var express = require('express');
var router = express.Router();
var Frate=require('../models/fraternidad.model');
var Verificar=require('../middleware/autenticacion');  
 var body_parser    = require('body-parser');        
var multer = require('multer');
var upload=multer({dest:"./uploads"});


var fs =require('fs');

/* GET home page. */
router.get('/',function(req, res, next) {
    Frate.find({},(err,query)=>{
        if(err){
   
         return res.status(302).json({lista:[],error:err,estado:'fail'});
   
        }
        if(!query){
          return   res.status(302).json({lista:[],error:'no se que paso',estado:'fail'});
        }
       
       return res.status(200).json({lista:query,estado:'ok'});
      });
});
   
router.post('/',function(req,res,next){
  let f = new Frate(req.body);

//console.log(req.foto);
f.save((err,frate)=>{
        if(err){
            return res.status(302).json({error:err,estado:'fail'});
        }
         if(frate.length==0){
            return res.status(302).json({error:'errooor',estado:'fail'});
         }
        if (frate)
        {
            
            return res.status(200).json({frate:frate,estado:'ok'});
        }else
        return res.status(302).json({error:'no se que paso',estado:'fail'});
    
    });                                                                                                                            
});
router.delete('/:_id',async(req,res,next)=>{

   var id=Frate.findById(req.params._id)
   //Producto.remove({"_id":id});
   let p=Frate.find({});
  //return res.status(302).json({id:query});
  await Frate.findByIdAndUpdate({ _id: req.params._id }, {estado:0},function(err) {
    if (!err) {
        Frate.find({},(err,query)=>{
        if(err){
   
         return res.status(302).json({lista:[],error:err,estado:'fail'});
   
        }
        if(!query){
          return   res.status(302).json({lista:[],error:'no se que paso',estado:'fail'});
        }
        //return res.render  ('producto/index',{lista:query});
       return res.status(200).json({lista:query,estado:'ok'});
      })
    } else {
        return res.send('Error no se elimino');
    }
});

 });
 router.put('/:id', function(req, res, next) {
    let id=req.params.id;
    Frate.findByIdAndUpdate(id,req.body,(err,query)=>{
      if(err){
  
       return res.status(302).json({lista:[],error:err,estado:'fail'});
  
      }
      if(!query){
        return   res.status(302).json({lista:[],error:'no se que paso',estado:'fail'});
      }
     
    
   
    return res.status(200).json({Frate:query,estado:'ok'})
      
      
    })
  
  });
module.exports = router;
