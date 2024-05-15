<template>
  <div class="hello">
    <h1>Welcome to the Vue Quiz App</h1>
    <h3>Pick a Quiz App genre</h3>
    <div v-if="responseData?.ids?.length > 0">
      <QuizOptions
        :ids="responseData.ids"
        :genres="responseData.genres"
        componentLink="StartQuiz"
      />
    </div>
    <div v-else>
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import QuizOptions from '../components/QuizOptions.vue';
import AppSpinner from '../components/AppSpinner.vue';
export default {
  name: 'PickQuiz',
  components: {
    QuizOptions,
    AppSpinner,
  },
  data() {
    return {
      responseData: {},
    };
  },
  // updated() {
  //   console.log('PickQuiz', this.responseData.ids, this.responseData.genres);
  // },
  methods: {
    async fetchQuizIds() {
      try {
        const response = await axios.get('http://localhost:5001/quiz/pick');
        this.responseData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
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
