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
  },
  data: () => ({
    mitschriften: [],
    serverAddress: process.env.VUE_APP_SERVER,
  }),

  methods: {
    async fetchMitschriften() {
      let { data } = await axios({
        url: this.serverAddress + '/mitschriften',
        method: 'GET',
      });
      this.mitschriften = data;
    },
  },
};
</script>
