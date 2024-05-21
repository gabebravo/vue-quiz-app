<template>
  <div v-if="this.showResults">
    <QuizResults />
  </div>
  <div v-else class="hello">
    <h2>Here is your next question</h2>
    <div class="outter-container" v-if="responseData?.question">
      <QuizQuestion
        :question="responseData.question"
        :choices="responseData.choices"
        :selectionHandler="submitNextUserAnswer"
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
import QuizResults from '../components/QuizResults/QuizResults.vue';
import {
  getNextUserQuestionAsync,
  submitNextUserAnswerAsync,
} from '../async/index.js';

export default {
  name: 'NextQuestion',
  components: {
    AppSpinner,
    QuizQuestion,
    QuizResults,
  },
  data() {
    return {
      responseData: {},
      showResults: false,
    };
  },
  methods: {
    async getNextUserQuestion() {
      const quizId = this.$route.params.id;
      const result = await getNextUserQuestionAsync(quizId);
      if (result.isComplete) {
        this.showResults = true;
      } else {
        this.responseData = result;
      }
    },
    async submitNextUserAnswer(answer) {
      const quizId = this.$route.params.id;
      const info = await submitNextUserAnswerAsync({
        quizId,
        answer,
      });
      this.responseData = info;
      if (info.isComplete) {
        this.showResults = true;
      } else {
        this.getNextUserQuestion();
      }
    },
  },
  async mounted() {
    this.getNextUserQuestion();
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
