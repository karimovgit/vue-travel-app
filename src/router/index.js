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
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "panama" */ "../views/Panama")
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