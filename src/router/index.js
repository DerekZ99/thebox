import Vue from "vue";
import VueRouuter from "vue-router";

const Home = () => import("../views/home/home");

Vue.use(VueRouuter);

const routes = [
  {
    //配置映射关系
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = new VueRouuter({
  routes,
});

export default router;
