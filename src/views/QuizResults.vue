<template>
  <div class="hello">
    <h2>You've Completed the Quiz</h2>
    <h4>Here's how you did</h4>
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
    <button @click="getInfo">Info</button>
  </div>
</template>

<script>
import axios from 'axios';
import AppSpinner from '../components/AppSpinner.vue';
import QuizQuestion from '../components/QuizQuestion/QuizQuestion.vue';
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
    async getInfo() {
      try {
        const response = await axios.get(`http://localhost:5001/answer/all`);
        this.responseData = response.data;
        console.log('gb - responseData:', this.responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async getNextQuestion() {
      try {
        const quizId = this.$route.params.id;
        const response = await axios.get(
          `http://localhost:5001/answer/next?id=${quizId}`
        );
        this.responseData = response.data;
        console.log('gb - responseData:', this.responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async submitAnswer(answer) {
      try {
        const quizId = this.$route.params.id;
        const response = await axios.post(
          `http://localhost:5001/answer/submit`,
          {
            quizId,
            answer,
          }
        );
        this.responseData = response.data;
        if (this.responseData.isComplete) {
          this.$router.push({
            name: 'QuizResults',
            params: { id: quizId },
          });
        } else {
          this.getNextQuestion();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  async mounted() {
    this.getNextQuestion();
  },
};
</script>
