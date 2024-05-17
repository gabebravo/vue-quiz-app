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
    <div v-for="(question, index) in responseData?.questions" :key="index">
      <QuizQuestion
        :question="question.question"
        :choices="question.choices"
        :selectionHandler="() => {}"
      />
      <label>{{ responseData?.answers[index] }}</label
      ><br />
    </div>
    <button @click="ReturnHome">Play Again!</button>
  </div>
</template>

<script>
import axios from 'axios';
import AppSpinner from '../components/AppSpinner.vue';
import QuizQuestion from '../components/QuizQuestion/QuizQuestion.vue';

export default {
  name: 'QuizResults',
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
    async getAllinfo() {
      try {
        const answerResponse = await axios.get(
          `http://localhost:5001/answer/all`
        );
        const { quizId, answers } = answerResponse.data[0];
        this.responseData.answers = answers;

        const quizResponse = await axios.get(
          `http://localhost:5001/quiz/questions?quizId=${quizId}`
        );

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
