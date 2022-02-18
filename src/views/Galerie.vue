<template>
  <div class="text-center">
    <h1>Hier finden Sie alle Tafelbilder</h1>
    <v-btn to="/" outlined>Home</v-btn>
    <v-container class="d-flex flex-wrap justify-center">
      <div v-for="m of mitschriften" :key="m.id">
        <img :src="m.img" alt="Bild der Mitschrift" width="400" />
        <h4>Mitschrift vom {{ m.date }}</h4>
        <v-btn text class="blue--text" :to="`/bildmittext/${m.id}`"> Ansehen</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    mitschriften: {
      type: Array,
    },
    id: {
      type: String,
    },
  },
  methods: {},
  created() {
    console.log(this.mitschriften);
  },
};
</script>

<style lang="scss" scoped></style>
