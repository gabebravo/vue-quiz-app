<template>
  <div class="hello">
    <h2>You've Completed the Quiz</h2>
    <div class="play-again">
      <div><h4>Here's how you did</h4></div>
      <div><button @click="ReturnHome">Play Again!</button></div>
    </div>
    <div class="outter-container" v-if="responseData?.questions">
      <div
        class="inner-container"
        v-for="(question, index) in responseData?.questions"
        :key="index"
      >
        <ResultsQuestions
          :question="question.question"
          :choices="question.choices"
          :answer="responseData?.answers[index]"
        />
        <div class="label">
          <span
            v-if="
              responseData?.answers[index] === responseData?.quizAnswers[index]
            "
          >
            The answer is :
            <label class="right-answer">{{
              responseData?.quizAnswers[index]
            }}</label>
          </span>
          <span v-else>
            The answer is :
            <label class="wrong-answer">{{
              responseData?.quizAnswers[index]
            }}</label>
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div v-else>
      <AppSpinner />
    </div>
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
        const { quizId, answers } = answerResponse.data[0];
        this.responseData.answers = answers;

        const quizResponse = await axios.get(
          `http://localhost:5001/quiz/questions?quizId=${quizId}`
        );

        this.responseData.questions = quizResponse.data.questions;
        this.responseData.quizAnswers = quizResponse.data.answers;
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
.label {
  margin: 10px;
  font-weight: 500;
}
.right-answer {
  color: #42b983;
}
.wrong-answer {
  color: #ff0800;
}
</style>
