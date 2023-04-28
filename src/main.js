import { createApp } from "vue";
import App from "./App.vue";

import * as VueRouter from "vue-router";

import MainPage from "./components/MainPage.vue";
import LoginPage from "./components/LoginPage.vue";

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/login",
          component: LoginPage,
        },
        {
          path: "/",
          component: MainPage,
        },
        // {
        //   path: "/:pathMatch(.*)*",
        //   component: NotFound,
        // },
      ],
    })
  )
  .mount("#app");
