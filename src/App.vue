<template>
  <v-app>
    <v-app-bar dense dark app>
      <img src="../public/img/icons/android-chrome-192x192.png" width="40" class="mr-3" />
      <v-toolbar-title class="font-weight-bold">vData</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view :mitschriften="mitschriften" />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  created() {
    this.fetchMitschriften();
    console.log(this.mitschriften);
  },
  data: () => ({
    mitschriften: [],
  }),

  methods: {
    async fetchMitschriften() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/mitschriften',
        method: 'GET',
      });
      this.mitschriften = data;
    },
  },
};
</script>
