import axios from 'axios'
import qs from 'qs';
// // 注册
// export const register = (register_data) => {
//     return axios.request({
//         url: '/Acc/AccRegister',
//         method: 'post',
//         data:register_data
//     })
// }
// // 登录
//
// export const user_onload = (register_data) => {
//     return axios.request({
//         url: '/Acc/Login',
//         method: 'post',
//         data:register_data
//     })
// }

let baseUrl = 'http://106.14.41.189:8654/api';
export const postRuquest = (url, params) => {
    return axios({
        method: 'post',
        url: baseUrl+url,
        data: qs.stringify(params),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};