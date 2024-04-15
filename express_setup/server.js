const express = require('express');
const app = express();                  //require express套件
const portnum=8088;

const booksRouter = require("./router/books.js");//  umodule[2]引入/router/books.js->程式位置，.代表當前目錄
const aboutRouter = require("./router/about.js");
const users=require('./router/users.js')
router.use('/users',users);
// app.get("/",(req,res)=>{
//     res.send("嗨嗨 我是node.js server");
// });
app.get("/",(req,res)=>{
    res.send("<h1>這是middleware 練習</h1>+<img src='/images/線條小狗.png' />");
});
app.use(express.static('public')); //設定靜態檔案的路徑

app.use('/books',booksRouter); //將/books的requests，導入給booksRouter處理
app.use('/about',aboutRouter);
app.listen(portnum,()=>{
    console.log(`server is running on port ${portnum}`);
});

