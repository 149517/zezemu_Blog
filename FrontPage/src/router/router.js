import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/home.vue'
import Note from '../components/note.vue'
import Redbook from "../components/redbook.vue";
import Display from "../components/display.vue";
import Introduce from "../components/introduce.vue";
import About from "../components/about.vue";
import Details from "../components/details.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/note', component: Note },
        { path: '/redbook', component: Redbook },
        { path: '/display', component: Display },
        { path: '/introduce', component: Introduce },
        { path: '/about', component: About },
        { path: '/details', component: Details },
    ]
})

export default router