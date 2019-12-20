import Vue from 'vue'
import Router from 'vue-router'
import router from '../router'
import Cookies from 'js-cookie'

router.beforeEach((to, form, next)=>{
    var cookies = Cookies.get('user_token');
    var userInfo = null;
    if(cookies) {
        userInfo = JSON.parse(Cookies.get('user_token'))
    }
    if(userInfo) {
        next()
    }else {
        if(to.path == '/login') {
            next()
        }else {
            next('/login');
        }
    }
    document.title = to.meta.title + ' - Vue Element Admin';
})