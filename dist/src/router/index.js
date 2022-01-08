import { createRouter, createWebHashHistory } from "vue-router";

//
// import HelloWorld from import('@/component/HelloWorld')

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/HelloWorld"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/main"),
  },

  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/main"),
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard/main"),
  },
  {
    path: "/Profil",
    name: "Profil",
    component: () => import("@/views/Profil/main"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About/main"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users/main"),
  },
  {
    path: "/users/:id/:username?",
    name: "detailuser",
    component: () => import("@/views/users/detailUser"),
  },
  {
    path: "/create-user",
    name: "createuser",
    component: () => import("@/views/users/FormCreate"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
