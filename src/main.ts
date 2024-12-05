import {createApp} from 'vue'
import App from './App.vue'

import "@/assets/iconfont/iconfont.scss";
import '@/styles/common.scss'
import '@/styles/element.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from "@element-plus/icons-vue";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import pinia from "@/stores";
import router from "@/router";
import i18n from "@/lang";

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(pinia)
app.use(router)
app.use(i18n)


app.mount('#app')
