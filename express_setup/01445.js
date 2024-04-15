// 1.先在github開啟新專案
// 2.進入C:\Users\USER\demo_github
// 3.ls為空
// 4.git clone github上新專案的網址 //拉遠端程式到電腦
// 5.cd github上新專案的名稱
// 6.git add .
// 7.git commit -m "uploading code" //括號打欲添加的說明
// 8. git push
const express = require('express');
const router = express.Router(); // 创建路由器对象

// 处理 /books 路径的 GET 请求
router.get('/', (req, res) => {
    
  res.send('我是 /books 路径的根路由'); // 发送一个简单的消息作为响应
});

// 处理 /books/page 路径的 GET 请求
router.get('/page', (req, res) => {
  res.json({ message: '我是 /books/page 路径的消息' }); // 发送 JSON 格式的数据作为响应
});

module.exports = router; // 导出路由器对象