import axios from 'axios'

const config={
    baseURL:'https://api.it120.cc/xiaochengxu'
}

class reqest{
    instance:any
    constructor(config:any){
        this.instance=axios.create(config)
        this.instance.interceptors.request.use(function (config:any) {
            // 在发送请求之前做些什么
            return config;
          }, function (error:any) {
            // 对请求错误做些什么
            return Promise.reject(error);
          });
        this.instance.interceptors.response.use(function (response:any) {
            // 对响应数据做点什么
            return response;
          }, function (error:any) {
            // 对响应错误做点什么
            return Promise.reject(error);
          });
    }
    get(url:string,params:any){
        return this.instance.get(url,params)
    }
    post(url:string,params:any){
        return this.instance.post(url,params)
    }
}
export default new reqest(config)