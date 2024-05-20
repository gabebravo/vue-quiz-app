<template>
  <div class="hello">
    <h1>You've picked the {{ this.$route.params.genre }} Quiz</h1>
    <h4>Here is your first question</h4>
    <div class="outter-container" v-if="responseData?.question">
      <QuizQuestion
        :question="responseData.question"
        :choices="responseData.choices"
        :selectionHandler="submitAnswer"
      />
    </div>
    <div v-else>
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import AppSpinner from '../components/AppSpinner.vue';
import QuizQuestion from '../components/QuizQuestion/QuizQuestion.vue';
import { startQuizAsync, submitInitialAnswerAsync } from '../async/index.js';

export default {
  name: 'StartQuiz',
  components: {
    AppSpinner,
    QuizQuestion,
  },
  data() {
    return {
      responseData: {},
    };
  },
  methods: {
    async startQuiz() {
      const quizId = this.$route.params.id;
      this.responseData = await startQuizAsync(quizId);
    },
    async submitAnswer(answer) {
      const quizId = this.$route.params.id;
      const genre = this.$route.params.genre;
      this.responseData = await submitInitialAnswerAsync({
        genre,
        quizId,
        answer,
      });

      this.$router.push({
        name: 'NextQuestion',
        params: { id: this.responseData.id },
      });
    },
  },
  async mounted() {
    this.startQuiz();
  },
};
</script>

<style scoped>
.outter-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
}
</style>
