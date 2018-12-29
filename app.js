/**
 * Created by admin on 2018/12/23.
 *
 * 测试调用Java写的webservice模块
 */
const express = require('express');
const app = express();
const ChinaTVRouter = require("./routers/ChinaTV");
const WeatherRouter = require("./routers/Weather");
const hostName = "127.0.0.1"; //ip
const port = 8551; //


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS') {
        res.send(200);
        /让options请求快速返回/
    } else {
        next();
    }
});


app.use("/wsdl/ChinaTV", ChinaTVRouter);
app.use("/wsdl/Weather", WeatherRouter);

app.listen(port, hostName, function () {

    console.log(`服务器运行在http://${hostName}:${port}/`);

})