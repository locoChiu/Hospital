//后端入口文件

const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据需要
const express = require('express');
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
});


app.use('/api', routerApi);


// 监听端口
app.listen(8088);
console.log('success listen at port:8088......');