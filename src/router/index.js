import Vue from 'vue'
import Router from 'vue-router'
const routerOptions = [
    { path: '/', component: 'layout/index' },
    { path: '/test', component: 'Test' },
    { path: '*', component: '404' }
]
const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/components/${route.component}.vue`)
    }
})
Vue.use(Router)
export default new Router({
    routes,
    mode: 'history'
})
