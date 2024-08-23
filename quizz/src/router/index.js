import AnsweredPage from "@/pages/AnsweredPage.vue";
import Questions from "../pages/Questions.vue";
import Login from "@/pages/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/Questions",
      name: "Questions",
      component: Questions,
    },
    {
      path: "/answered",
      name: "answered",
      ccomponent:AnsweredPage,
    },
  ],
});

export default router;
