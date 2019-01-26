/**
 * Created by admin on 2018/12/28.
 *
 * 测试调用Java写的webservice模块
 *
 * 中国天气接口
 */

const express = require("express");
const router = express.Router();
const ChinaTV = require("../constrollers/ChinaTV");
const Weather = require("../constrollers/Weather");
router.get("/getRegionProvince", Weather.getRegionProvince);
router.post("/getWeather", Weather.getWeather);
router.get("/getAreaDataSet", ChinaTV.getAreaDataSet);

module.exports = router;