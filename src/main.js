import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPersistedState} from 'pinia-persistedstate-plugin'
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import EChart from './components/echart/index.vue'

const app = createApp(App)

app.component("Editor", QuillEditor)
// 自定义组件
app.component("EChart", EChart)

const pinia = createPinia()
pinia.use(createPersistedState())
app.use(pinia)
app.use(ElementPlus)
app.use(router)


app.mount('#app')
