import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";


const myAxios: AxiosInstance = axios.create({
    // baseURL: 'https://thisdcw.cn/api',
    baseURL: 'http://127.0.0.1:8088/api',
    timeout: 10000,
    withCredentials: true
} as CreateAxiosDefaults);

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 判断状态码是否为200
    const code = response.data.code;

    return response.data;

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;
