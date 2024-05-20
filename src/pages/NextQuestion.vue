<template>
  <div class="hello">
    <h2>Here is your next question</h2>
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
import { getNextQuestionAsync, submitNextAnswerAsync } from '../async/index.js';

export default {
  name: 'NextQuestion',
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
    async getNextQuestion() {
      const quizId = this.$route.params.id;
      this.responseData = await getNextQuestionAsync(quizId);
    },
    async submitAnswer(answer) {
      const quizId = this.$route.params.id;
      const data = await submitNextAnswerAsync({
        quizId,
        answer,
      });
      this.responseData = data;
      if (data.isComplete) {
        this.$router.push({
          name: 'QuizResults',
          params: { id: quizId },
        });
      } else {
        this.getNextQuestion();
      }
    },
  },
  async mounted() {
    this.getNextQuestion();
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
