import { createRouter, createWebHistory } from "vue-router";
import Blog from "@/views/Blog.vue";
import Person from "@/views/Person.vue";
import Life from "@/views/Life.vue";
import About from "@/views/About.vue";
import person_infor from "@/components/person_information.vue";
import calender from "@/components/calender.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/blog",
      name: "blog",
      children: [
        {
          name: "left",
          path: "left",
          component: person_infor,
        },
        {
          name: "right",
          path: "right",
          component: calender,
        },
        {
          path: "/",
          redirect: "/home/left",
        },
      ],
      component: Blog,
    },
    {
      path: "/person",
      name: "person",
      component: Person,
    },
    {
      path: "/life",
      name: "life",
      component: Life,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/",
      redirect: "/blog",
    },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
