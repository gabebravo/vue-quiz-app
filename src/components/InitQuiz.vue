<template>
  <div class="hello">
    <h1>You've picked the {{ $route.params.genre }} Quiz</h1>
    <h3>Here is the question?</h3>
    <ul>
      <li>
        <p>Quiz ID: {{ $route.params.id }}</p>
        <!-- Accessing route parameter -->
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'InitQuiz',
  props: {
    quizName: String,
  },
  data() {
    return {
      responseData: {},
    };
  },
  // methods: {
  //   async fetchQuizIds() {
  //     try {
  //       const response = await axios.get('http://localhost:5001/quiz');
  //       this.responseData = response.data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   },
  //   initQuiz(id) {
  //     console.log(id);
  //   },
  // },
  // async mounted() {
  //   this.fetchQuizIds();
  // },
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
  all: unset;
  color: #42b983;
  cursor: pointer;
}
</style>
