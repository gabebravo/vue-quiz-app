<template>
  <div>
    <QuestionLabel :question="question" />
    <QuestionChoices :choices="choices" :selectionHandler="selectionHandler" />
  </div>
</template>

<script>
import QuestionLabel from './QuestionLabel.vue';
import QuestionChoices from './QuestionChoices.vue';
export default {
  name: 'QuizQuestion',
  components: {
    QuestionLabel,
    QuestionChoices,
  },
  props: {
    question: String,
    choices: {
      type: Array,
      required: true,
    },
    selectionHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isEnabled: false,
    };
  },
};
</script>
