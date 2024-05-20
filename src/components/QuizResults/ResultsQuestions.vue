<template>
  <div class="hello">
    <QuestionLabel :question="question" />

    <div class="user-label">
      <span> Your answer was : </span>
    </div>

    <form>
      <div
        class="row-container"
        v-for="(choice, index) in choices"
        :key="index"
      >
        <span>
          <input
            type="radio"
            :id="choice"
            name="options"
            :value="choice"
            :checked="choice === this.userAnswer && 'checked'"
            :disabled="choice !== this.userAnswer && 'checked'"
          />
          <label
            v-if="choice === this.userAnswer && choice === this.quizAnswer"
            class="right-answer"
            :for="choice"
            >{{ choice }}</label
          >
          <label
            v-else-if="choice === this.userAnswer && choice !== this.quizAnswer"
            class="wrong-answer"
            :for="choice"
            >{{ choice }}</label
          >
          <label v-else :for="choice">{{ choice }}</label>
        </span>
        <br />
      </div>
    </form>

    <div class="label">
      <span>
        The correct answer is :
        <label>{{ this.quizAnswer }}</label>
      </span>
    </div>
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
    userAnswer: {
      type: String,
      required: true,
    },
    quizAnswer: {
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
.label {
  margin: 10px;
  font-weight: 600;
  font-style: italic;
}
.user-label {
  margin: 10px;
  text-align: left;
  font-style: italic;
}
.right-answer {
  color: #42b983;
}
.wrong-answer {
  color: #ff0800;
}
</style>
