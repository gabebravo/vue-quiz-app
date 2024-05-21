import { createRouter, createWebHistory } from 'vue-router';
import PickQuiz from './pages/PickQuiz.vue';
import StartQuiz from './pages/StartQuiz.vue';
import TakeQuiz from './pages/TakeQuiz.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'PickQuiz',
    component: PickQuiz,
  },
  {
    path: '/start/:genre/:id',
    name: 'StartQuiz',
    component: StartQuiz,
    props: true,
  },
  {
    path: '/:id',
    name: 'TakeQuiz',
    component: TakeQuiz,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
