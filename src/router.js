// router.js
import { createRouter, createWebHistory } from 'vue-router';
import PickQuiz from './components/PickQuiz.vue';
import InitQuiz from './components/InitQuiz.vue';

const routes = [
  {
    path: '/',
    name: 'PickQuiz',
    component: PickQuiz,
  },
  {
    path: '/init/:id', // Dynamic segment ":id"
    name: 'InitQuiz',
    component: InitQuiz,
    props: true, // Pass route params as props to UserDetails component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
