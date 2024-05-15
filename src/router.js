// router.js
import { createRouter, createWebHistory } from 'vue-router';
import PickQuiz from './components/PickQuiz.vue';
import StartQuiz from './components/StartQuiz.vue';

const routes = [
  {
    path: '/',
    name: 'PickQuiz',
    component: PickQuiz,
  },
  {
    path: '/start/:id', // Dynamic segment ":id"
    name: 'StartQuiz',
    component: StartQuiz,
    props: true, // Pass route params as props to UserDetails component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
