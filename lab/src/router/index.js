import Vue from "vue";
import Router from "vue-router";
import store from "../store";
//view
import MyShop from "../components/MyShop.vue";
import Login from "../components/LoginState.vue";
import ShopCart from "../components/ShopCart.vue";

const includPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return includPush.call(this, location).catch(err => err)
}


Vue.use(Router);

const routes = [
  {
    //預設
    path: "/",
    name: "Shop",
    component: MyShop,
  },
  {
    //登入
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    //商店
    path: "/shop",
    name: "Shop",
    component: MyShop,
  },
  {
    //購物車
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
    meta: {
      requireAuth: true
    }
  },
  {
    //都不符合導至預設
    path: "*",
    redirect: "/",
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //路由需要認證
  if (to.meta.requireAuth) {
    //判斷store裡是否有token
    if (store.state.token) {
      next();
    } else {
      next({path: '/login',})
    }
  } next();
})

export default router;
