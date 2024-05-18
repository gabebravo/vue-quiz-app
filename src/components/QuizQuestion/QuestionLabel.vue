<template>
  <div class="outer-container">
    <div>{{ question }}</div>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  props: {
    question: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-container {
  display: flex;
  text-align: left;
  margin-bottom: 1rem;
}
</style>
