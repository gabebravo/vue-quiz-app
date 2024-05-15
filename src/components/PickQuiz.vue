<template>
  <div class="hello">
    <h1>Welcome to the Vue Quiz App</h1>
    <h3>Pick a Quiz App genre</h3>
    <ul>
      <li v-if="responseData.movieQuizId">
        <router-link
          :to="{
            name: 'InitQuiz',
            params: { id: responseData.movieQuizId, genre: 'Movie' },
          }"
          >Movie Quiz</router-link
        >
      </li>
      <li v-else>Movie Quiz</li>
      <li v-if="responseData.musicQuizId">
        <router-link
          :to="{
            name: 'InitQuiz',
            params: { id: responseData.musicQuizId, genre: 'Music' },
          }"
          >Music Quiz</router-link
        >
      </li>
      <li v-else>Music Quiz</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PickQuiz',
  data() {
    return {
      responseData: {},
    };
  },
  methods: {
    async fetchQuizIds() {
      try {
        const response = await axios.get('http://localhost:5001/quiz');
        this.responseData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    // initQuiz(id) {
    //   console.log(id);
    // },
  },
  async mounted() {
    this.fetchQuizIds();
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
a {
  all: unset;
  color: #42b983;
  cursor: pointer;
}
</style>
