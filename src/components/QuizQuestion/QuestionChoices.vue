<template>
  <div class="outer-container">
    <div class="inner-container">
      <form @submit.prevent="handleSubmit">
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
            v-model="selectedOption"
          />
          <label :for="choice">{{ choice }}</label
          ><br />
        </div>
        <button type="submit" :disabled="!selectedOption">Next</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionChoices',
  props: {
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
      selectedOption: null, // Initially no option selected
    };
  },
  methods: {
    handleSubmit() {
      if (this.selectedOption !== null) {
        this.selectionHandler(this.selectedOption);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-container {
  display: flex;
  justify-content: center; /* Center the grid horizontally */
}
.inner-container {
  display: grid;
  width: 60%;
}
.row-container {
  display: flex;
}
button {
  color: #42b983;
}
</style>
