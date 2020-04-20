import Vue from "vue";
import VueRouuter from "vue-router";

const Home = () => import("../views/home/home");
const Myself = () => import("../views/myself/Myself")
const Collection = () => import("../views/collection/Collection")
const Work = () => import("../views/work/Work")

Vue.use(VueRouuter);

const routes = [{
    //配置映射关系
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: '/myself',
    component: Myself
  },
  {
    path: '/collection',
    component: Collection
  },
  {
    path: "/work",
    component: Work
  },
];

const router = new VueRouuter({
  routes,
});

export default router;