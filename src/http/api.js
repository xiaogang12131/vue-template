import axios from './http.js';
import qs from 'qs'

//====正式
//  let root = "http://spread.yilvs.com";
//====测试
let root = "http://114.215.130.190:8081";

/**
 * 接口模版====post
 *
 * export const test = params => {return axios.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test = function(){return axios.get(`${root}/api/getNewsList`)}
 *
 */