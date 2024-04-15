const express=require('express');
const router=express.Router(); //產生router物件

router.get('/login',(req,res)=>{
    res.render('login');    
})

router.get('register',(req,res)=>{
    res.render('register');    
})
module.exports=router