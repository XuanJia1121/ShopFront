import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//商品區
import {allProduct} from '../api/http';
//USer
import {userLogin} from '../api/http';

const state = {
   productJsonArray:{},
   productJsonStr:'',
   token:sessionStorage.getItem('token'),
   cartMap:{}
};

const mutations = {
    SET_PRODUCT_ARRAY(state,data){
        state.productJsonArray = data;
    },
    SET_LOGIN_TOKEN(state,data){
        state.token = data;
        sessionStorage.setItem('token',data)
    },
    REMOVE_LOGIN_TOKEN(state){
        state.token = '';
        sessionStorage.removeItem('token');
    },
    ADD_CART(state, { pid, quantity }) {
        const quantityInCart = state.cartMap[pid] ?? 0;
        Vue.set(state.cartMap, pid, quantity + quantityInCart);
    },
    REMOVE_CART_BY_ID(state, pid) {
        Vue.delete(state.cartMap, pid);
    },
    CLEAN_CART(state) {
        state.cartMap = {};
    },
};

const getters = {
    //get商品Array
    GET_PRODUCT_ARRAY(state){
        return state.productJsonArray;
    },
    CART_INFO: state => {
            const items = Object.keys(state.cartMap).map((pid) => {
                const p = state.productJsonArray[pid];
                const quantity = state.cartMap[pid] ?? 0;
                return {
                  pid: p.pid,
                  price:p.price,
                  name: p.name,
                  quantity,
                  thisTotal:p.price * quantity
                };
              });
              const total = items.reduce(
                (sum, i) => {
                  sum.price += i.price * i.quantity;
                  return sum;
                },
                { price: 0 }
              );
              return {
                items,
                ...total,
              };
    }   
}

const actions = {
    //call and get商品Array
    callApiGetAllProduct({commit}){
        return new Promise((resolve,reject) => {
            allProduct.then(res => {
                commit('SET_PRODUCT_ARRAY',res.data.data);
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
        })
    },
    callApiLogin({commit},user){
        return new Promise((resolve,reject) => {
            userLogin(user).then(res => { 
                if (res.data.code === 200) {
                    commit('SET_LOGIN_TOKEN',res.data.data.token);
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