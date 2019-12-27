import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'
import thisVue from '../main'

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, form, next)=>{
    console.log('进入了钩子函数')

    const hasToken = getToken()

    if(hasToken) {
        console.log('有token')
        if(to.path === '/login') {
            console.log('有token to.path=login')
            next()
        }else {
            console.log('有token to.path！=login')
            const hasRoles = store.state.user.roles && store.state.user.roles.length > 0
            if (hasRoles) {
                console.log('有路由列表')
                next()
            }else {
                console.log('添加路由列表')
                try {
                    const { roles } = await store.dispatch('getUserInfo')
                    const accessRoutes = await store.dispatch('generateRoutes', roles)
                    router.addRoutes(accessRoutes)
                    // console.log(roles,accessRoutes,'roles')
                    next({ ...to, replace: true })
                } catch(error) {
                    alert('123')
                    await store.dispatch('resetToken')
                    next()
                }
            }
            next()
        }
    }else {
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
        // other pages that do not have permission to access are redirected to the login page.
            next('/login')
        }
    }
    if(thisVue) {
        document.title = thisVue.$t(filterLanguages(thisVue.$t('navBar'),'navBar',to.meta.languages)) + ' - Vue Element Admin'
    }else {
        document.title = 'Login - Vue Element Admin'
    }
})

function filterLanguages(targetObj, targetObjName, val) {
    for(var i in targetObj) {
        if(i == val) {
            return targetObjName + '.' + val
        }
    }
}