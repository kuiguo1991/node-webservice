/**
 * Created by admin on 2018/12/28.
 *
 * 测试调用Java写的webservice模块
 *
 * 
 */

const express = require("express");
const router = express.Router();
const ChinaTV = require("../constrollers/ChinaTV");
const Weather = require("../constrollers/Weather");

router.get("/Weather/getRegionProvince", Weather.getRegionProvince);
router.post("/Weather/getWeather", Weather.getWeather);

router.get("/ChinaTV/getAreaDataSet", ChinaTV.getAreaDataSet);

module.exports = router;