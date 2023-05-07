import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Artworks from '../components/Artworks.vue'
import Links from '../components/Links.vue'
import Misc from '../components/Misc.vue'

const router = createRouter({
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
    ]
})

export default router
