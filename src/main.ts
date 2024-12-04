import {createApp} from 'vue'
import App from './App.vue'

import "@/assets/iconfont/iconfont.scss";
import '@/styles/common.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import pinia from "@/stores";
import router from "@/router";

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(pinia)
app.use(router)


app.mount('#app')
