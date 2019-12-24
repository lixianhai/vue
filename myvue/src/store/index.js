import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { login,getInfo } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { asyncRoutes,constantRoutes } from '@/router'
import { resetRouter } from '@/router'
 
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tagsNavActiveClassIndex: -1,
        navActivePath: '',
        user: {
            token: getToken(),
            name: '',
            roles: [],
            addRoutes: [],
            routes: []
        }
    },
    mutations: {
        changeTagsNavActiveClassIndex: (state,index) => {
            state.tagsNavActiveClassIndex = index;
        },
        navChangeTagsNavActiveClassIndex: (state,activePath) => {
            state.navActivePath = activePath;
        },
        removeTagsNavActiveClassIndex: (state) => {
            state.tagsNavActiveClassIndex-- ;
        },
        SET_TOKEN(state,token) {
            state.user.token = token;
        },
        SET_ROLES(state,roles) {
            state.user.roles = roles
        },
        SET_NAME(state,name) {
            state.user.name = name
        },
        SET_ROUTES: (state,routes) => {
            state.user.addRoutes = routes
            state.user.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        login( state,userInfo ) {
            const token = userInfo.name
            return new Promise((resolve, reject) => {
                login(token).then(data => {
                    store.commit('SET_TOKEN',data)
                    setToken(token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getUserInfo( state ) {
            return new Promise((resolve, reject) => {
                getInfo(state.state.user.token).then(data => {
                    const { roles, name } = data
                    store.commit('SET_ROLES', roles)
                    store.commit('SET_NAME', name)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        generateRoutes( state,roles ) {
            return new Promise((resolve, reject) => {
                let accessedRoutes
                if (roles.includes('admin')) {
                    accessedRoutes = asyncRoutes || []
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
                }
                store.commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        },
        resetToken(state) {
            return new Promise((resolve, reject) => {
                store.commit('SET_TOKEN','')
                store.commit('SET_ROUTES', [])
                removeToken()
                resolve()
            })
        },
        logout(state) {
            return new Promise((resolve,reject) => {
                store.commit('SET_TOKEN', '')
                store.commit('SET_ROLES', [])
                removeToken()
                resetRouter()
                resolve()
            })
        },
        changeRoles(state,role) {
            console.log(role)
            return new Promise(async(resolve,reject) => {
                const token = role + '-token'
                store.commit('SET_TOKEN', token)
                setToken(token)

                const { roles } = await store.dispatch('getUserInfo')
                resetRouter()

                const accessRoutes = await store.dispatch('generateRoutes', roles, { root: true })

                router.addRoutes(accessRoutes)

                resolve()
            })
        }
    }
})

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
      return roles.some(role => route.meta.roles.includes(role))
    } else {
      return true
    }
  }
  
  /**
   * Filter asynchronous routing tables by recursion
   * @param routes asyncRoutes
   * @param roles
   */
  export function filterAsyncRoutes(routes, roles) {
    const res = []
  
    routes.forEach(route => {
      const tmp = { ...route }
      if (hasPermission(roles, tmp)) {
        if (tmp.children) {
          tmp.children = filterAsyncRoutes(tmp.children, roles)
        }
        res.push(tmp)
      }
    })
  
    return res
  }


export default store