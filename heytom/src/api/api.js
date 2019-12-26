import axios from 'axios'
//QS是axios库中带的，不需要我们再npm安装一个

// 请求延时
axios.defaults.timeout = 20000

axios.interceptors.request.use(
    config => {
        var token = window.localStorage.getItem("token");
        config.headers.Authorization = "Bearer " + token;
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

export const BaseApiUrl = "http://localhost:9999";

// 登录
export const loginRequest = params => {
    return axios.get(`${BaseApiUrl}/api/Login/Token`, {params: params}).then(res => res.data);
};

export const getUserInfoRequest = params=>{
    return axios.post(`${BaseApiUrl}/api/Login/GetUserInfo`,params).then(res=>res.data);
}

export const githubCallBack = params=>{
    return axios.get(`${BaseApiUrl}/api/Login/GitHubCallBcak`,{params: params}).then(res=>res.data);
}

export const sendVerificationCode = params=>{
    return axios.post(`${BaseApiUrl}/api/Register/SendVerificationCode`,params).then(res=>res.data);
}

export const Register=params=>{
    return axios.post(`${BaseApiUrl}/api/Register`,params).then(res=>res.data);
}
