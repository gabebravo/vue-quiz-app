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
import QuizOptions from '../components/QuizOptions.vue';
import AppSpinner from '../components/AppSpinner.vue';
import { getQuizIdsAsync } from '../async/index.js';
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
  methods: {
    async getQuizIds() {
      this.responseData = await getQuizIdsAsync();
    },
  },
  async mounted() {
    this.getQuizIds();
  },
};
</script>

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
