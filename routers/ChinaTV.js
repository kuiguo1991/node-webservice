/**
 * Created by admin on 2018/12/23.
 *
 * 测试调用Java写的webservice模块
 * 
 * 中国电台接口
 */

const express = require('express')
const router = express.Router()
var soap = require("soap");

//中国电台
const url = "http://www.webxml.com.cn/webservices/ChinaTVprogramWebService.asmx?wsdl";


router.get("/ChinaTV", function(req, res) {
  // res.send('hello, express')
  soap.createClient(url, "utf8", function(err, client) {
    client.getAreaDataSet(function(err, result) {
      var d = result.getAreaDataSetResult.diffgram.Area.AreaList;
      var dd = [];
      console.log(result.getAreaDataSetResult.diffgram.Area.AreaList);
      for (var i = 0; i < d.length; i++) {
        var number = Math.ceil(Math.random() * 100);
        dd.push({
          AreaID: i,
          Area: d[i].Area,
          Zone: d[i].Zone,
          number: number
        });
      }
      var data = JSON.stringify({
        code: 0,
        msg: "请求成功",
        result: dd
      });
      console.log(dd);
      res.send(data);
    });
  });
});

module.exports = router