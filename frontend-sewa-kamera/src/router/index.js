import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/Home.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: "Main",
          component: () => import('../components/Main.vue')
        }
      ]
    },
    {
      path: "/",
      name: "Auth",
      component: () => import("../views/Auth/Auth.vue"),
      beforeEnter: preventAuthPage,
      children: [{
        path: '/login',
        name: "Login",
        component: () => import('../components/Auth/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Auth/Register.vue'),
      }
    ],
    },
  ],
});

function requireAuth(to, from, next) {
  if($cookies.get("token")) next();
  else next({name: "Login"});
}

function preventAuthPage(to, from , next) {
  if (!$cookies.get("token")) next();
  else next({name: "Home"});
}

export default router;
