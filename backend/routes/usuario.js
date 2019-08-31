var express = require('express');
var router = express.Router();
var Usuario=require('../models/usuario.model');
var bcrypt=require('bcrypt');
 var jwt=require('jsonwebtoken');
 var Verificar=require('../middleware/autenticacion');

router.post('/',function(req,res,next){

    let u = new Usuario(req.body);
    u.password=bcrypt.hashSync(u.password,10);
    u.save((err,usuario)=>{
    if(err){
        return res.status(302).json({error:err,estado:'fail'});

    }
    if (usuario){
        u.tipo=false;
        return res.status(200).json({usuario:usuario,estado:'ok'});
    }else
    return res.status(302).json({error:'no se que paso',estado:'fail'});
    
});
});
router.post('/login',(req,res,next)=>{
Usuario.find({login:req.body.login},(err,user)=>{
    if(err){
        console.log(err);
        return res.status(302).json({error:err,estado:'fail'});
    }else{
    if(bcrypt.compareSync(req.body.password,user[0].password)){
        let token=jwt.sign({usuario:user[0],
        iat:Math.floor(Date.now()/1000)-30},'shdn2io3u91456289j9348h9'
        );
        console.log(user[0]);
        return res.status(200).json({usuario:user[0],token:token,estado:'ok'});
    }else{
      
    return res.status(300).json({error:'no existe el usuario',estado:'fail'});
    }}
});
});

module.exports = router;
