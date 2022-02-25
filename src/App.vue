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
import { openDB } from 'idb';
export default {
  name: 'App',
  data: () => ({
    mitschriften: [],
    storedMitschriften: [],
    db: null,
    id: '',
  }),

  async created() {
    await this.fetchMitschriften();
    await this.openDB();
    await this.getStoredMitschriften();
    console.log(this.storedMitschriften);
  },

  methods: {
    async fetchMitschriften() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/mitschriften',
        method: 'GET',
      });
      this.mitschriften = data;
    },
    async openDB() {
      this.db = await openDB('mitschriftenDB', 1, {
        upgrade(db) {
          db.createObjectStore('mitschriften', { keyPath: 'id' });
        },
      });
    },
    async getStoredMitschriften() {
      this.storedMitschriften = await this.db.getAll('mitschriften');
      for (const m of this.mitschriften) {
        await this.db.put('mitschriften', m);
      }
    },
    async removeMitschrift(id) {
      await this.db.delete('mitschriften', id);
      this.getStoredMitschriften();
    },
  },
};
</script>
