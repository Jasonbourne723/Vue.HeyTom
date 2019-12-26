import Vue from "vue";
import Router from "vue-router";// 引用路由
import Home from "../views/Home.vue";//导入方法1 Home页面
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import Post from "../views/Vip/Post.vue";
import github from "../views/GitHubCallBack.vue";
import vip from "../views/Vip/Vip.vue";
import Register from "../views/Register.vue";

Vue.use(Router);

const createRouter = () => new Router({
  mode: "history",
  //   base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      // meta: { requireAuth: false }
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      iconCls: 'fa-address-card',//图标样式class
      meta: {
        title: '登录',
        NoNeedHome: true // 添加该字段，表示不需要home模板
      },
      hidden: true
    },
    {
      path: "/Register",
      component: Register,
      name: 'Register',
      meta: {
        title: '注册',
        NoNeedHome: true // 添加该字段，表示不需要home模板
      },
      hidden: true
    },
    {
      path: "/about",//路径
      name: "about",//名字
      component: About
    },
    {
      path: "/index",//路径
      name: "index",//名字
      component: Index
    },
    // {
    //   path: "/Post",
    //   name: "Post",
    //   component: Post
    // },
    {
      path: "/githubcallback",
      name: github,
      component: github,
      meta: {
        title: '登录',
        NoNeedHome: true // 添加该字段，表示不需要home模板
      },
      hidden: true
    },
    {
      path: "/vip",
      name: vip,
      component: vip,
      children: [
        { path: 'Post', component: Post, meta: { requireAuth: true } }
      ]
    }

    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")//导入方法2，导入About页面
    // }
  ]
});
const router = createRouter()

router.beforeEach((to, from, next) => {
  window.console.log(to);
  // /to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子 
  if (to.meta.requireAuth === true) {
    if (window.localStorage.getItem("token")) {
      window.console.log("have token");
      next()
    }
    else {
      window.console.log("no token");
      if (to.path === '/login') { //如果是登录页面路径，就直接next()
        next();
      } else { //不然就跳转到登录；
        next('/login');
      }
    }
  } else { //进入的不是登录路由 
    window.console.log("no auth");
    next()   // 如果即将进入登录路由，则直接放行 
  }
})
export default router;

