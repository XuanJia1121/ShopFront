<template>
    <div>
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <h3 class="mb-4">請登入</h3>

                        <label class="form-label" for="typeEmailX-2">Username</label>
                        <div class="form-outline mb-4">
                        <input v-model="userDTO.username" id="typeEmailX-2" class="form-control form-control-lg" />
                        </div>
                        
                        <label class="form-label" for="typePasswordX-2">Password</label>
                        <div class="form-outline mb-4">
                        <input v-model="userDTO.password" id="typePasswordX-2" class="form-control form-control-lg" />
                        </div>
                        
                        <div>
                            <label class="form-label text-danger" for="typeEmailX-2">{{resultData.message}}</label>
                        </div>
                        <el-button @click="login" type="primary" round>登入</el-button>

                        <hr class="my-4">

                        <el-button type="danger" round>Sign in with google</el-button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
           userDTO:{
               username:'',
               password:'',
               token:sessionStorage.getItem('token')
           },
           resultData:{
               code:'',
               message:'',
               data:'',
           }
        }
    },
    methods: {
        ...mapActions(['callApiLogin']),
        login(){
            let resutnDTO = this.callApiLogin(this.userDTO);
            resutnDTO.then(res => {
                this.resultData = res;
                if (this.resultData.code === 200) {
                    this.$router.push('/ShopCart');
                }
            }).catch(err => {
               this.resultData = err;
            })
        },
    },
}
</script>

<style>

</style>