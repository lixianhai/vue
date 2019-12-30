import Vue from 'vue'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'
import thisVue from '../main'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, form, next)=>{

    NProgress.start()
    const hasToken = getToken()

    if(hasToken) {
        if(to.path === '/login') {
            next()
            NProgress.done()
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
                    await store.dispatch('resetToken')
                    next()
                    NProgress.done()
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
            NProgress.done()
        }
    }
    if(thisVue) {
        document.title = thisVue.$t(filterLanguages(thisVue.$t('navBar'),'navBar',to.meta.languages)) + ' - Vue Element Admin'
    }else {
        document.title = 'Login - Vue Element Admin'
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})  

function filterLanguages(targetObj, targetObjName, val) {
    for(var i in targetObj) {
        if(i == val) {
            return targetObjName + '.' + val
        }
    }
}