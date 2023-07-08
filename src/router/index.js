import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Artworks from '../components/Artworks.vue'
import Links from '../components/Links.vue'
import Comissions from '../components/Comissions.vue'

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
            path: '/LyphDraw-portfolio/Comissions',
            name: Comissions,
            component: Comissions
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router
