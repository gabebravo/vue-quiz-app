<template>
  <div class="outer-container">
    <div class="form-wrapper">
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
      selectedOption: null,
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

<style scoped>
.outer-container {
  display: flex;
}
.form-wrapper {
  width: 100%;
}
.row-container {
  display: flex;
  margin: 5px 0px;
}
button:disabled {
  color: #a3a0a0;
  cursor: no-drop;
  border-radius: 20px;
  border: 1px solid;
  padding: 3px 9px;
  font-weight: 500;
  background-color: #f1f1f1;
}
button:enabled {
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid;
  padding: 3px 9px;
  font-weight: 500;
  background-color: #42b983;
}
</style>
