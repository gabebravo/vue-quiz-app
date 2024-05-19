import { createRouter, createWebHistory } from 'vue-router';
import PickQuiz from './pages/PickQuiz.vue';
import StartQuiz from './pages/StartQuiz.vue';
import NextQuestion from './pages/NextQuestion.vue';
import QuizResults from './pages/QuizResults.vue';

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
    path: '/start/:id',
    name: 'NextQuestion',
    component: NextQuestion,
    props: true,
  },
  {
    path: '/results/:id',
    name: 'QuizResults',
    component: QuizResults,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
