<template>
  <div class="hello">
    <div class="play-again">
      <h2>You've Completed the Quiz</h2>
      <div><button @click="ReturnHome">Play Again!</button></div>
    </div>
    <div><h3>Here's how you did</h3></div>
    <div class="outter-container" v-if="responseData?.questions">
      <div
        class="inner-container"
        v-for="(question, index) in responseData?.questions"
        :key="index"
      >
        <ResultsQuestions
          :question="question.question"
          :choices="question.choices"
          :userAnswer="responseData?.answers[index]"
          :quizAnswer="responseData?.quizAnswers[index]"
        />
        <hr />
      </div>
    </div>
    <div v-else>
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import AppSpinner from '../AppSpinner.vue';
import ResultsQuestions from './ResultsQuestions.vue';
import {
  getUserQuizResultsAsync,
  getSourceQuizQuestionsAsync,
} from '../../async/index.js';

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
    async getUserQuizInfo() {
      const userQuizId = this.$route.params.id;
      const { quizId, answers } = await getUserQuizResultsAsync(userQuizId);

      this.responseData.answers = answers;
      const sourceQuiz = await getSourceQuizQuestionsAsync(quizId);

      this.responseData.questions = sourceQuiz.data.questions;
      this.responseData.quizAnswers = sourceQuiz.data.answers;
    },
    ReturnHome() {
      this.$router.push({
        name: 'PickQuiz',
      });
    },
  },
  async mounted() {
    this.getUserQuizInfo();
  },
};
</script>

<style scoped>
button {
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid;
  padding: 5px 10px;
  font-weight: 500;
  background-color: #42b983;
}
h3 {
  margin: 10px;
}
.play-again {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
}
.outter-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
}
.inner-container {
  margin: 10px 0px;
}
</style>
