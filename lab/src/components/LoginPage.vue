<template>

    <div>
        <body>
         <!-- top -->
        <div id="jumbotron" class="jumbotron jumbotron-fluid">
            <div class="container">
            <div class="row">
                <div class="col-4">
                <h1 @click="toHome()" id="title" class="p-2">UrShop</h1>
                </div>
            </div>
            </div>
        </div>
            
        <div class="container">
            <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                <div class="card-img-left d-none d-md-flex">
                   
                </div>
                <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title text-center mb-5 fw-light fs-5">會員登入</h5>
                    <div class="form-floating mb-3">
                        <input v-model="userData.username" type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus>
                        <label for="floatingInputUsername">帳號</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input v-model="userData.password" type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                        <label for="floatingInputEmail">密碼</label>
                    </div>

                    <div class="text-center">
                        <strong class="text-danger">{{loginErrMsg}}</strong>
                    </div>

                    <hr>

                    <div class="d-grid mb-2">
                        <button @click="baseLogin()" class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="button">登入</button>
                    </div>

                    <a class="d-block text-center mt-2 small" href="#">忘記密碼</a>

                    <hr class="my-4">

                    <div class="d-grid mb-2">
                        <a class="btn btn-lg btn-google btn-login fw-bold text-uppercase" href="http://localhost:8087/lab/oauth2/authorization/google">
                             <i class="fab fa-google me-2"></i> Sign up with Google
                        </a>
                    </div>

                    <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-member btn-login fw-bold text-uppercase" type="submit">
                        <i class="fab fa-google me-2"></i> 加入會員
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </body>
  </div>

</template>

<script>

import {mapActions} from 'vuex'

export default {
    data() {
        return {
            loginErrMsg:'',
            userData:{
                username:'',
                password:''
            }
        }
    },methods: {
        ...mapActions(['callLoginApi','callGoogleLogin']),
        baseLogin(){
            this.callLoginApi(this.userData)
            .then(this.toHome())
            .catch(err => {
                this.loginErrMsg = err.data.msg;
            });
        },
        toHome(){
            this.$router.push("/");
        }
    },
}
</script>

<style scoped>

#jumbotron {
  background-color: rgb(87, 92, 160);
}

#title {
  color:aliceblue;
}

body {
  background:#cfedf1
}

.card-img-left {
  width: 45%;
  /* Link to your background image using in the property below! */
  background: scroll center url('https://source.unsplash.com/WEQbe2jBg40/414x512');
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-member {
  color: white !important;
  background-color: #c26490;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}


</style>