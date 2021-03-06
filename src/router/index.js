import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */
        "../views/DestinationDetails"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes
});

export default router;
