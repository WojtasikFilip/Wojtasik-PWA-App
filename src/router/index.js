import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aufnahme',
    name: 'Aufnahme',

    component: () => import('../views/Aufnahme.vue'),
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: () => import('../views/Galerie.vue'),
  },
  {
    path: '/bildmittext/:id',
    name: 'BildText',
    props: true,
    component: () => import('../views/BildmitText.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
