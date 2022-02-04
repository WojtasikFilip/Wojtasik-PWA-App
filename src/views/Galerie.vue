<template>
  <div class="text-center">
    <h1>Hier finden Sie alle Tafelbilder</h1>
    <v-btn to="/">Home</v-btn>
    <v-container class="d-flex flex-wrap justify-center">
      <div v-for="m of mitschriften" :key="m.id">
        <img :src="m.img" alt="Bild der Mitschrift" width="400" />
        <v-btn :to="`/bildmittext/${m.id}`">Dahin</v-btn>
        <h4>Mitschrift vom {{ m.date }}</h4>
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
  created() {
    console.log(this.mitschriften);
  },
};
</script>

<style lang="scss" scoped></style>
