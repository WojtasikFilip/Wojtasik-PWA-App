<template>
  <div class="text-center">
    <h2>Hier ist die ausgewählte Mitschrift vom {{ mitschriftÄndern.map((el) => el.date).toString() }}:</h2>
    <img :src="mitschriftÄndern.map((el) => el.img)" width="500" alt="Bild der Mitschrift" />
    <br />
    <h2>Umgewandelter Text dazu:</h2>
    <v-btn to="/galerie" outlined>Back</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Mitschrift: [],
    };
  },
  props: {
    mitschriften: {
      type: Array,
    },
    id: {
      type: String,
    },
  },
  computed: {
    mitschriftÄndern() {
      return this.mitschriften.filter((el) => el.id == this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
