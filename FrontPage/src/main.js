import { createApp } from 'vue'
import './style.css'
import './assets/fonts/fonts.css'
import App from './App.vue'
import router from './router/router.js'
import store from  './store/store.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './utils/config.js'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';


// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)

app.config.productionTip = false;
app.use(VMdPreview)
app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')
