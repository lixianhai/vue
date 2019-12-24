import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'

router.beforeEach(async(to, form, next)=>{

    const hasToken = getToken()

    if(hasToken) {
        // console.log('token存在')
        if(to.path === '/login') {
            // console.log('登录页面')
            next()
        }else {
            const hasRoles = store.state.user.roles && store.state.user.roles.length > 0
            if (hasRoles) {
                // console.log('存在大于0')
                next()
            }else {
                try {
                    const { roles } = await store.dispatch('getUserInfo')
                    const accessRoutes = await store.dispatch('generateRoutes', roles)
                    router.addRoutes(accessRoutes)
                    // console.log(roles,accessRoutes,'roles')
                } catch(error) {
                    await store.dispatch('resetToken')
                    next()
                }
            }
            next()
        }
    }else {
        // console.log('token不存在')
        next();
    }
})