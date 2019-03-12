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


/**
* @api {get} /wsdl/Weather/getRegionProvince 天气获取
* @apiDescription 获取天气
* @apiName getRegionProvince
* @apiGroup Weather
* @apiVersion 1.0.0
*/


router.get("/Weather/getRegionProvince", Weather.getRegionProvince);

/**
* @api {get} /wsdl/Weather/getWeather 天气获取
* @apiDescription 获取天气
* @apiName getWeather
* @apiGroup Weather
* @apiVersion 1.0.0
*/
router.post("/Weather/getWeather", Weather.getWeather);

/**
* @api {get} /wsdl/ChinaTV/getAreaDataSet 区域数据
* @apiDescription 获取区域数据
* @apiName getAreaDataSet
* @apiGroup ChinaTV
* @apiVersion 1.1.0
*/
router.get("/ChinaTV/getAreaDataSet", ChinaTV.getAreaDataSet);

module.exports = router;