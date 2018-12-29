/**
 * Created by admin on 2018/12/28.
 *
 * 测试调用Java写的webservice模块
 * 
 * 中国天气接口
 */

const express = require('express')
const router = express.Router()
var soap = require("soap");

//中国天气
const url = "http://ws.webxml.com.cn/WebServices/WeatherWS.asmx?wsdl";


router.get("/", function(req, res) {
  soap.createClient(url, "utf8", function(err, client) {
    client.getRegionProvince(function(err, result) {
      var d = result.getRegionProvinceResult.string;
      var dd = [];
      for (var i = 0; i < d.length; i++) {
        var arr = d[i].split(",");
        var number = Math.ceil(Math.random() * 100);
        dd.push({
          name: arr[0],
          number: number
        });
      }
      var data = JSON.stringify({
        code: 0,
        msg: "请求成功",
        result: dd
      });
      // console.log(data);
      res.send(data);
    });
  });
});

module.exports = router
