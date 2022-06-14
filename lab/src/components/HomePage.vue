<template>
<div>

  <!-- top -->
  <div id="jumbotron" class="jumbotron jumbotron-fluid">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h1 id="title" class="p-2">UrShop</h1>
        </div>
        <div class="col-6 d-flex  p-3 justify-content-end">
          <el-row>
            <el-button @click="toCart()" type="warning" icon="el-icon-shopping-cart-1" circle></el-button>
            <el-button type="info" icon="el-icon-message-solid" circle></el-button>
          </el-row>
        </div>
        <div class="col-2 d-flex  p-3 justify-content-end">
          <el-row v-if="!IS_LOGIN">
            <el-button @click="login()" id="auth" type="danger" icon="el-icon-s-custom" circle></el-button>
          </el-row>
          <div v-if="IS_LOGIN" id="loginUser" class="d-flex align-items-center">
             <el-popover placement="top" width="160" v-model="visible">
              <p>確定登出嗎？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="loginOut()">确定</el-button>
              </div>
              <el-button slot="reference" type="primary" round>
                <font class="text-black">{{USER_INFO.username}}</font>
             </el-button>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- nav -->
  <div class="nav justify-content-center bg-light">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link">全部商品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">全部商品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">全部商品</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="container">
    <div class="row mt-3">
      <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
/* eslint-disable */

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapActions(['callLogOutApi']),
    login(){
      this.$router.push("/login");
    },
    loginOut(){
      this.visible = false;
      this.callLogOutApi(this.USER_INFO).then(function(){
        this.$router.push("/");
      }).catch((err)=>{
        console.log(err);
      })
    },
    toCart(){
      this.$router.push("/cart");
    }
  }, 
  computed:{
    ...mapGetters(['USER_INFO','IS_LOGIN'])
  },
};
</script>

<style scoped>
#jumbotron {
  background-color: rgb(87, 92, 160);
}
#title {
  color:aliceblue;
}
#loginUser {
  color: aliceblue;
  font-size:20px;
}
</style>