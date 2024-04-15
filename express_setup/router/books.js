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
