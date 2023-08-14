import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/article", component: () => import("@/views/RedBook/red-book.vue") },
  { path: "/assistant", component: () => import("@/views/RedBook/assistant.vue") },
  { path: "/", component: () => import("@/views/RedBook/home.vue") },
  { path: "/video/:id", component: () => import("@/views/Video/index.vue") }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
