import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JoinRoomView from "../views/JoinRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: JoinRoomView,
    },
    {
      path: "/test",
      name: "test",
      component: import("../views/MessagesView.vue"),
    },
  ],
});

export default router;
