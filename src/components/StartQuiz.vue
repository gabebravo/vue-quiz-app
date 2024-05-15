<template>
  <div class="hello">
    <h1>You've picked the {{ responseData.genre }} Quiz</h1>
    <h3>Here is the question?</h3>
    <ul>
      <li>
        <p>question: {{ responseData.question }}</p>
        <!-- Accessing route parameter -->
      </li>
      <li>
        <p>answers: {{ responseData.choices }}</p>
        <button :disabled="!isEnabled">Next</button>
        <!-- <button @click="enableButton">Control</button> -->
        <!-- Accessing route parameter -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'StartQuiz',
  props: {
    quizName: String,
  },
  data() {
    return {
      responseData: {},
      isEnabled: false,
    };
  },
  methods: {
    enableButton() {
      this.isEnabled = true;
      console.log('info', this.isEnabled);
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  color: #42b983;
  cursor: pointer;
}
</style>
