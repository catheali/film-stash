import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw  } from 'vue-router';
import TopRatedMovies from '../views/TopRatedMovies.vue';
import MyFavoriteMovies from '../views/MyFavoriteMovies.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'top-rated-movies',
    component: TopRatedMovies,
  },
  {
    path: '/my-favorites',
    name: 'my-favorites',
    component: MyFavoriteMovies,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

