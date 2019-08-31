var express = require('express');
var router = express.Router();
var Ubicacion=require('../models/ubicacion.model');
router.post('/',function(req,res,next){
    let u = new Ubicacion(req.body);
   
    u.save((err,ubi)=>{
        if(err){
            return res.status(302).json({error:err,estado:'fail'});
        }
         if(ubi.length==0){
            return res.status(302).json({error:'errooor',estado:'fail'});
         }
        if (ubi)
        {
             return res.status(200).json({ubi:ubi,estado:'ok'});
        }else
        return res.status(302).json({error:'no se que paso',estado:'fail'});
    
    });                                                                                                                            
});

module.exports = router;
