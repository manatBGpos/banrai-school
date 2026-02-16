import { createRouter, createWebHistory } from "vue-router";
import Home_component from "../view/home_component.vue";
import Empoyee_component from "../view/personnel_component.vue";
import Newsletter_component from "../view/publicrelations_component.vue";
import Ecoalance_component from "../view/ecoalance_component.vue";
import School_security_component from "../view/school_security_component.vue";
import Personnel_component from "../view/personnel_component.vue";
import Publicrelations_component from "../view/publicrelations_component.vue";
import Science_component from "../view/science_component.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home_component,
  },
  {
    path: "/personnel",
    name: "personnel",
    component: Personnel_component,
  },

  {
    path: "/public_relationster",
    name: "public_relationster",
    component: Publicrelations_component,
  },
  {
    path: "/ecobalane",
    name: "ecobalane",
    component: Ecoalance_component,
  },
  {
    path: "/school_security",
    name: "school_security",
    component: School_security_component,
  },
  {
    path: "/science",
    name: "science",
    component: Science_component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
