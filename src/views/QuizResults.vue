<template>
  <div class="hello">
    <h2>You've Completed the Quiz</h2>
    <h4>Here's how you did</h4>
    <div v-if="responseData?.questions">
      <div v-for="(question, index) in responseData?.questions" :key="index">
        <ResultsQuestions
          :question="question.question"
          :choices="question.choices"
          :answer="responseData?.answers[index]"
        />
        <label>{{ responseData?.answers[index] }}</label
        ><br />
      </div>
    </div>
    <div v-else>
      <AppSpinner />
    </div>
    <button @click="ReturnHome">Play Again!</button>
  </div>
</template>

<script>
import axios from 'axios';
import AppSpinner from '../components/AppSpinner.vue';
import ResultsQuestions from '../components/QuizResults/ResultsQuestions.vue';

export default {
  name: 'QuizResults',
  components: {
    AppSpinner,
    ResultsQuestions,
  },
  data() {
    return {
      responseData: {},
    };
  },
  methods: {
    async getAllinfo() {
      try {
        const answerResponse = await axios.get(
          `http://localhost:5001/answer/all`
        );
        console.log('gb - answerResponse:', answerResponse);
        const { quizId, answers } = answerResponse.data[0];
        this.responseData.answers = answers;

        const quizResponse = await axios.get(
          `http://localhost:5001/quiz/questions?quizId=${quizId}`
        );
        console.log('gb - quizResponse:', quizResponse);

        this.responseData.questions = quizResponse.data.questions;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    ReturnHome() {
      this.$router.push({
        name: 'PickQuiz',
      });
    },
  },
  async mounted() {
    this.getAllinfo();
  },
};
</script>
