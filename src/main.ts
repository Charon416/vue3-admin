import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入svg
import 'virtual:svg-icons-register'
// 注册全局组件
import globalComponent from '@/components/index.ts'
// 引入全局样式
import '@/styles/index.scss'
// 引入路由
import router from '@/router'
// 引入pinia
import pinia from '@/store'

const app = createApp(App)
// 挂载全局组件
app.use(globalComponent)
// 挂载路由
app.use(router)
// 挂载组件库
app.use(ElementPlus, { locale: zhCn })
//挂载pinia
app.use(pinia)
app.mount('#app')
