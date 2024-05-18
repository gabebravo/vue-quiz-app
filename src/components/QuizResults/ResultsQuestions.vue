<template>
  <div class="hello">
    <QuestionLabel :question="question" />
    <form>
      <div
        class="row-container"
        v-for="(choice, index) in choices"
        :key="index"
      >
        <input
          type="radio"
          :id="choice"
          name="options"
          :value="choice"
          :checked="choice === this.answer && 'checked'"
          :disabled="choice !== this.answer && 'checked'"
        />
        <label :for="choice">{{ choice }}</label
        ><br />
      </div>
    </form>
  </div>
</template>

<script>
import QuestionLabel from '../QuizQuestion/QuestionLabel.vue';
export default {
  name: 'ResultsQuestions',
  components: {
    QuestionLabel,
  },
  props: {
    question: {
      type: String,
      required: true,
    },
    choices: {
      type: Array,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.row-container {
  display: flex;
}
</style>
