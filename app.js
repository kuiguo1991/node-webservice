/**
 * Created by admin on 2018/12/23.
 *
 * 测试调用Java写的webservice模块
 */
var express = require('express');
var app = express();
var soap = require('soap');
var hostName = "127.0.0.1"; //ip
var port = 7553; //
var url = 'http://www.webxml.com.cn/webservices/ChinaTVprogramWebService.asmx?wsdl';

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
app.get('/v3/api', function (req, res) {
    soap.createClient(url, 'utf8', function (err, client) {
        client.getAreaDataSet(function (err, result) {
           var d=result.getAreaDataSetResult.diffgram.Area.AreaList;
            var dd=[];
            console.log(result.getAreaDataSetResult.diffgram.Area.AreaList);
            for (var i = 0; i < d.length; i++) {
                var number = Math.ceil(Math.random() * 100)
                dd.push({
                    "AreaID":i,
                    "Area":d[i].Area,
                    "Zone": d[i].Zone,
                    "number": number
                })
            }
            var data = JSON.stringify({
                    "code": 0,
                    "msg": "请求成功",
                    "result": dd
            })
            console.log(dd);
            res.send(data);

        });
    });
})


app.listen(port, hostName, function () {

    console.log(`服务器运行在http://${hostName}:${port}/v3/api`);

})