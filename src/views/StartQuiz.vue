<template>
  <div class="hello">
    <h1>You've picked the {{ $route.params.genre }} Quiz</h1>
    <h4>Here is your first question</h4>
    <div v-if="responseData?.question">
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
import axios from 'axios';
import AppSpinner from '../components/AppSpinner.vue';
import QuizQuestion from '../components/QuizQuestion/QuizQuestion.vue';
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
    async submitAnswer(answer) {
      try {
        const quizId = this.$route.params.id;
        const response = await axios.get(
          `http://localhost:5001/quiz/start?id=${quizId}`
        );
        this.responseData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async startQuiz() {
      try {
        const quizId = this.$route.params.id;
        const response = await axios.get(
          `http://localhost:5001/quiz/start?id=${quizId}`
        );
        this.responseData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  async mounted() {
    this.startQuiz();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  color: #42b983;
  cursor: pointer;
}
</style>
