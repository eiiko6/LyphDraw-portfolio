import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Artworks from '../pages/Artworks.vue'
import Links from '../pages/Links.vue'
import Misc from '../pages/Misc.vue'

const router = createRouter({
    history: createWebHistory(),
    mode: 'hash',
    routes: [
        {
            path: '/LyphDraw-portfolio',
            name: Home,
            component: Home
        },
        {
            path: '/LyphDraw-portfolio/Artworks',
            name: Artworks,
            component: Artworks
        },
        {
            path: '/LyphDraw-portfolio/Links',
            name: Links,
            component: Links
        },
        {
            path: '/LyphDraw-portfolio/Misc',
            name: Misc,
            component: Misc
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router
