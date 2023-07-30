import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home/index.vue") },
  { path: "/video/:id", component: () => import("@/views/Video/index.vue") }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
