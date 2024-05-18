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

<style scoped>
.outer-container {
  display: flex;
  text-align: left;
  margin-bottom: 1rem;
}
</style>
