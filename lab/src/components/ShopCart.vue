<template>
    <div>
        <el-container>

        <!-- 表頭 -->
        <el-header>
            <nav id="navBar" class="navbar navbar-dark bg-dark p-3 d-flex fixed-top">
            <button @click="backToShop()" class="btn btn-dark">
                <span class="badge rounded-pill bg-primary ">Shop Cart !</span>
            </button>
            <span class="badge rounded-pill bg-primary ">Token : {{token}}</span>
            </nav>
        </el-header>

        <!-- 商品列表 -->
        <el-main>
            <div v-if="checkCartIsExits">
                <table class="table text-center align-middle">
                <thead>
                    <tr>
                    <th scope="col">編號</th>
                    <th scope="col">名稱</th>
                    <th scope="col">價錢</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                    <th scope="col">加減</th>
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="pro in CART_INFO.items" :key="pro.pid">
                        <th class="text-danger">{{pro.pid}}</th>
                        <td>{{pro.name}}</td>
                        <td>{{pro.price}}</td>
                        <td>{{pro.quantity}}</td>
                        <td>
                            <h4 class="font-weight-bold">
                                ${{pro.thisTotal}}
                            </h4>
                        </td>
                        <td>
                            <el-button @click="delCartByPid(pro.pid,pro.name)"  type="danger" icon="el-icon-delete">刪除</el-button>
                        </td>
                    </tr>
                </tbody>
              </table>

            <h4 class="d-flex justify-content-end">總額：NT$<font class="text-danger">{{CART_INFO.price}}</font></h4>

            </div>
            
            <div v-else>
                <el-alert
                    title="您的購物車是空的！"
                    type="error"
                    show-icon>
                </el-alert>

                <el-button @click="backToShop()" class="mt-2" type="danger">返回商店</el-button>
            </div>

        </el-main>

        <el-footer>
            <nav class="navbar navbar-dark bg-dark p-2 d-flex flex-row-reverse fixed-bottom">
            <span class=" mt-1 mb-1 badge rounded-pill bg-dark">Copyright © [2022/5/13] [Xuan]. All rights reserved.</span>
            </nav>
        </el-footer>

        </el-container>
    </div>
</template>

<script>

import {mapGetters,mapMutations} from 'vuex';

export default {
    data() {
        return {
            token:sessionStorage.getItem('token'),
        }
    },
    methods: {
        ...mapMutations(['REMOVE_CART_BY_ID']),
        backToShop(){
            this.$router.push('/Shop');
        },
        delCartByPid(pid,name){
            this.REMOVE_CART_BY_ID(pid);this.$notify({
            title: '移除成功',
            message: name + '已從購物車移除！',
            position: 'bottom-right'
            });
        }
    },
    computed:{
        ...mapGetters(['CART_INFO']),
        checkCartIsExits:function(){
            if(this.CART_INFO != null && this.CART_INFO['items'].length){
                return true; 
            } 
            return false;
        }
    },
}
</script>

<style>

</style>