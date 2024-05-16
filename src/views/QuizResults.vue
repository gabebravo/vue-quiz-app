<template>
  <div class="hello">
    <h2>You've Completed the Quiz</h2>
    <h4>Here's how you did</h4>
    <!-- <div v-if="responseData?.question">
      <QuizQuestion
        :question="responseData.question"
        :choices="responseData.choices"
        :selectionHandler="submitAnswer"
      />
    </div>
    <div v-else>
      <AppSpinner />
    </div> -->
    <div v-if="responseData?.questions">{{ responseData?.questions }}</div>
    <div v-if="responseData?.answers">{{ responseData?.answers }}</div>
    <button @click="ReturnHome">Play Again!</button>
    <button @click="getInfo">Info</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuizResults',
  components: {},
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
        console.log('gb - quizResponse:', quizResponse.data);

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
