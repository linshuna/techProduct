import axios from 'axios'
import Qs from 'qs'
// var axios = require('axios');
// var Qs = require('qs');
const vueAllPlugin = {};
vueAllPlugin.install = function(Vue,options){
	//二次封装axios插件
	const vueAxiosServer = axios.create(options);
	Vue.prototype.$axios = vueAxiosServer;
	Vue.prototype.$http = {
		get: (url,data,option)=>{ //第三个参数是设置headers
			let axiosOpt = {
				...option,
				...{
					url:url,
					method:'get',
					data:Qs.stringify(data)
				}
			}
			return vueAxiosServer(axiosOpt)
		},
		post: (url,data,option)=>{
			console.log(typeof data)
			let axiosOpt = {
				...option,
				...{
					url:url, 
					method:'post',
					data:Qs.stringify(data)	
				}
			}
			return vueAxiosServer(axiosOpt)
		}
	}
}
//调用的方法 this.$http.get this.$http.post
export default vueAllPlugin;
// module.exports = vueAllPlugin;


//例子 第三个参数是设置headers
// this.$http.post("apis/api.php/apiForCompanys/getTechlistcompany",{vid: 53},{
// 	headers:{
// 	  'Content-Type':'application/x-www-form-urlencoded'
// 	}
// })
// .then((res)=>{
//   console.log(res)
// })