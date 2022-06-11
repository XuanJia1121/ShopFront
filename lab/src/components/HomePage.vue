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
            <el-button type="warning" icon="el-icon-shopping-cart-1" circle></el-button>
            <el-button type="info" icon="el-icon-message-solid" circle></el-button>
          </el-row>
        </div>
        <div class="col-2 d-flex  p-3 justify-content-end">
          <el-row v-if="!isLogin">
            <el-button @click="login()" id="auth" type="danger" icon="el-icon-s-custom" circle></el-button>
          </el-row>
          <div v-if="isLogin" id="loginUser" class="d-flex align-items-center">
            {{USER_INFO.name}} 你好！
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
import {mapGetters} from 'vuex';
/* eslint-disable */

export default {
  data() {
    return {
      isLogin:false,
    };
  },
  methods: {
    login(){
      this.$router.push("/login");
    }
  }, 
  computed:{
    ...mapGetters(['USER_INFO'])
  }
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