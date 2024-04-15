const express = require('express');
const router=express.Router(); //產生router物件


//路徑設定  21:00
router.get('/',(req,res)=>{
    res.send('我是 /books的根路徑');
})

router.get('/page',(req,res)=>{
    res.json({message:'我是/books/page路徑!!!'});  //發送json格式的資料給客戶端
})

//匯出router，等別人require使用
module.exports=router;