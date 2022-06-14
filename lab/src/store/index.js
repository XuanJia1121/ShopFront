import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//USer
import {loginApi} from '../api/http';

const state = {
    jwtToken:'',
    userinfo:{},
    isLogon:false
};

const mutations = {
  SET_TOKEN(state,data){
    state.jwtToken = data;
  },
  SET_USER(state,data){
    state.userinfo = data
    state.isLogon = true;
  }
};

const getters = {
    USER_INFO:state=>{
        return state.userinfo;
    },
    IS_LOGIN:state => {
        return state.isLogon;
    }
}

const actions = {
    callLoginApi({commit},userData){
        return new Promise((resolve,reject) => {
            loginApi(userData).then(res => { 
                if (res.data.code === '200') {
                    commit('SET_TOKEN',JSON.parse(res.data.data));
                    resolve(true)
                } else {
                    reject(false);
                }
            })
        })
    },
    // callGoogleLogin({commit}){
    //     return new Promise((resolve,reject) => {
    //         googleLoginApi().then(res => { 
    //             console.log(res);
    //             if (res.data.code === '200') {
    //                 commit('SET_TOKEN',JSON.parse(res.data.data));
    //                 resolve(true)
    //             } else {
    //                 reject(false);
    //             }
    //         })
    //     })
    // }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});