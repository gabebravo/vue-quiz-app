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
    async submitAnswer(answer) {
      try {
        const quizId = this.$route.params.id;
        const genre = this.$route.params.genre;
        const response = await axios.post(`http://localhost:5001/answer/init`, {
          genre,
          quizId,
          answer,
        });
        this.responseData = response.data;
        this.$router.push({
          name: 'NextQuestion',
          params: { id: this.responseData.id },
        });
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

<style scoped>
.outter-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
}
</style>
