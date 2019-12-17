import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tagsNavActiveClassIndex:-1,
        navActivePath:''
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
        }
    },
    actions: {

    }
})


export default store