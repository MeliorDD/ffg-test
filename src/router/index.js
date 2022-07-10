import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LayoutMain",
    redirect: "/content",
    component: () => import("@/layouts/LayoutMain/LayoutMain"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "LayoutAuth",
    component: () => import("@/layouts/LayoutAuth/LayoutAuth"),
  },
  {
    path: "/content",
    name: "ContentView",
    component: () => import("@/views/ContentView"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  to.matched.some((record) => record.meta.requiresAuth) &&
  !localStorage.getItem("token")
    ? next("/login")
    : next();
});
export default router;
