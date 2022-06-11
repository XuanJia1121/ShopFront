import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//USer
import {loginApi,googleLoginApi} from '../api/http';

const state = {
    jwtToken:'',
    userinfo:{}
};

const mutations = {
  SET_TOKEN(state,data){
    state.jwtToken = data;
  },
  SET_USER(state,data){
    state.userinfo = data
  }
};

const getters = {
    USER_INFO:state=>{
        return state.userinfo;
    }
}

const actions = {
    callLoginApi({commit},userData){
        return new Promise((resolve,reject) => {
            loginApi(userData).then(res => { 
                if (res.data.code === 200) {
                    commit('SET_TOKEN',res.data);
                    resolve(res.data)
                } else {
                    reject(res.data);
                }
            })
        })
    },
    callGoogleLogin({commit}){
        return new Promise((resolve,reject) => {
            googleLoginApi().then(res => { 
                console.log(res);
                if (res.data.code === 200) {
                    commit('SET_USER',res.data.data);
                    resolve(res.data)
                } else {
                    reject(res.data);
                }
            })
        })
    }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});