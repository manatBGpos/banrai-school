import { createRouter, createWebHistory } from "vue-router";
import Home_component from "../view/home_component.vue";
import Empoyee_component from "../view/empoyee_component.vue";
import Newsletter_component from "../view/newsletter_component.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home_component,
  },
  {
    path: "/empoyee",
    name: "empoyee",
    component: Empoyee_component,
  },

  {
    path: "/newsletter",
    name: "newsletter",
    component: Newsletter_component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
