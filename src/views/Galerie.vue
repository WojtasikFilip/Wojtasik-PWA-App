<template>
  <div class="text-center">
    <h1>Hier finden Sie alle Tafelbilder</h1>
    <v-btn to="/" outlined>Home</v-btn>
    <v-container class="d-flex flex-wrap justify-center">
      <div v-for="m of mitschriften" :key="m.id">
        <img :src="m.img" alt="Bild der Mitschrift" width="400" />
        <h4>Mitschrift vom {{ m.date }}</h4>
        <v-btn text class="blue--text" :to="`/bildmittext/${m.id}`"> Ansehen</v-btn>
        <v-btn text class="red--text" @click="dialogDelete = true"> Entfernen</v-btn>
        <div class="text-center" width="50%">
          <v-dialog v-model="dialogDelete">
            <v-sheet class="px-7 pt-7 pb-4 mx-auto text-center" color="blue-grey darken-3" dark>
              <div class="grey--text text--lighten-1 text-h6 mb-4">
                Are you sure you want to delete this photo?
              </div>

              <v-btn class="ma-1" color="grey" plain @click="dialogDelete = false"> Cancel </v-btn>

              <v-btn class="ma-1" color="error" plain @click="delPhoto()"> Delete </v-btn>
            </v-sheet>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogDelete: false,
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
  created() {
    console.log(this.mitschriften);
  },
};
</script>

<style lang="scss" scoped></style>
