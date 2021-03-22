import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserList from '@/views/UserList'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user/:username',
        name: 'UserList',
        component: UserList,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
