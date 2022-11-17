import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: () => import('../views/Home.vue'),
    //   beforeEnter: requireAuth,
    //   children: [
    //     {
    //       path: '',
    //       name: "Main",
    //       component: () => import('../components/Main.vue')
    //     }
    //   ]
    // },
    {
      path: "/",
      name: "Admin",
      component: () => import("../views/Admin.vue"),
      beforeEnter: requireAuth,
      children: [{
        path: '/dashboard',
        name: "Dashboard",
        component: () => import("../components/Dashboard.vue"),
        children: [
        {
          path: '/',
          name: "Main",
          component: () => import("../components/Dashboard/Carousel.vue")
        },
        {
          path: '/traffic',
          name: "Traffic",
          component: () => import("../components/Dashboard/Traffic.vue")
        },
        {
          path: '/productList',
          name: "ProductList",
          component: () => import("../components/Dashboard/ProductList.vue")
        },
        {
          path: '/addItem',
          name: 'AddItem',
          component: () => import("../components/Dashboard/AddItem.vue")
        },
        {
          path: '/userList',
          name: 'UserList',
          component: () => import("../components/Dashboard/UserList.vue")
        },
      ]
      }]
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
  else next({name: "Admin"});
}

export default router;
