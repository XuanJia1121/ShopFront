<template>
  <div>
    
    <el-container>

      <!-- 表頭 -->
      <el-header>
        <nav id="navBar" class="navbar navbar-dark bg-dark p-2 d-flex fixed-top">
          <span class="badge rounded-pill bg-primary">WelCome to My Shop !</span>
          <span v-if="token" class="badge rounded-pill bg-primary ">Token : {{token}}</span>
          <div class="p-2">
            <el-button @click="toShopCartPage" class="notification" icon="el-icon-shopping-cart-2" type="info">
              <span v-if="CART_INFO['items'].length" class="badge">{{CART_INFO['items'].length}}</span>
            </el-button>
            <el-button v-if="!hasToken" round @click="toLoginPage" class="m-1" type="info">登入</el-button>
            <el-button v-else class="m-1" round type="info">登出</el-button>
          </div>
        </nav>
      </el-header>

      <br>

      <!-- 商品列表 -->
      <el-main>
        <div class="container">
          <div class="row">
            <div v-for="(proData,index) in GET_PRODUCT_ARRAY" :key="index" class="col-3">
              <div class="card mb-5" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{proData.name}}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h5 class="text-danger">$ {{proData.price}}</h5>
                  <el-button plain @click="addCart(proData.pid,1,proData.name)" type="primary" round>加入購物車</el-button>
                </div>
              </div>
            </div>
          </div>
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

/* eslint-disable */

import {mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  data() {
    return {
      token:sessionStorage.getItem('token')
    }
  },
  methods: {
    ...mapActions(['callApiGetAllProduct']),
    ...mapMutations(['ADD_CART']),
    toLoginPage:function(){
      this.$router.push("/Login");
    },
    toShopCartPage:function(){
      this.$router.push("/ShopCart");
    },
    addCart(pid,quantity,name){
      this.ADD_CART({pid,quantity});
      this.$notify({
          title: '加入成功',
          message: name + '已加入購物車！',
          position: 'bottom-right'
        });
    },
  },
  computed:{
    ...mapGetters(['GET_PRODUCT_ARRAY','CART_INFO']),
    hasToken(){
      if (this.token) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted(){
    //init product list view
    this.callApiGetAllProduct();
  }

}
</script>

<style scoped>

  .notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 10px 10x;
  position: relative;
  display: inline-block;
  border-radius: 50px;
 }

  .notification:hover {
    background-color: cadetblue;
  }

  .notification .badge {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px 10px;
    border-radius: 50%;
    background: red;
    color: white;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>