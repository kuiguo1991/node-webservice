/**
 * Created by admin on 2018/12/20.
 *
 * 测试调用Java写的webservice模块
 */
var express = require('express');
var app = express();
var soap = require('soap');
var hostName = '127.0.0.1'; //ip
var port = 8888; //端口

var url = 'http://ws.webxml.com.cn/WebServices/WeatherWS.asmx?wsdl';

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS') {
         res.send(200); /让options请求快速返回/
      }
      else {
        next();
      }
});
app.get('/api', function (req, res) {
    soap.createClient(url,'utf8',function(err,client){
        client.getRegionProvince(function(err,result){
            var data = JSON.stringify(result.getRegionProvinceResult.string)
            console.log(data);
            res.end( data );
    
        });
    });
 })


app.listen(port,hostName,function () {

    console.log(`服务器运行在http://${hostName}:${port}/api`);
  
  })




