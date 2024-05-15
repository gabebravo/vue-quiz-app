<template>
  <ul>
    <li v-for="(id, index) in ids" :key="index">
      <router-link
        :to="{
          name: componentLink,
          params: { id, genre: genres[index] },
        }"
        >{{ genres[index] }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'QuizOptions',
  props: {
    ids: {
      type: Array,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
    componentLink: {
      type: String,
      required: true,
    },
  },
  // mounted() {
  //   console.log('QuizOptions', this.ids, this.genres, this.componentLink);
  // },
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
  color: #42b983;
}
</style>
