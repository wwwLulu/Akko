import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserList from '@/views/UserList'
import Auth from '@/views/Auth'
import store from '@/store/index.js'

const routes = [
    {
        path: '/',
        redirect: `/auth`,
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
        meta: { requiresUnAuth: true },
    },
    {
        path: '/user/:username',
        name: 'UserList',
        component: UserList,
        props: true,
    },
    { path: '/:notFound(.*)', redirect: `/user/${store.state.userName}` },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth')
    } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
        next(`/user/${store.getters.userName}`)
    } else {
        next()
    }
})

export default router
