import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'
import thisVue from '../main'

router.beforeEach(async(to, form, next)=>{

    const hasToken = getToken()

    if(hasToken) {
        if(to.path === '/login') {
            next()
        }else {
            const hasRoles = store.state.user.roles && store.state.user.roles.length > 0
            if (hasRoles) {
                next()
            }else {
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
        next();
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