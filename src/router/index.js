import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */
        "../views/DestinationDetails"
      )
  }
];

const router = new VueRouter({
  linkExactActiveClass: "vue-school-active-class",
  routes
});

export default router;
