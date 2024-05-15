<template>
  <div class="outer-container">
    <div class="inner-container">{{ question }}</div>
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
  justify-content: center;
  text-align: left;
  margin-bottom: 1rem;
}
.inner-container {
  display: grid;
  width: 60%;
}
</style>
