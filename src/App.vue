<template>
  <v-app>
    <v-app-bar dense dark app>
      <img src="../public/img/icons/android-chrome-192x192.png" width="40" class="mr-3" />
      <v-toolbar-title class="font-weight-bold">vData</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view
        :mitschriften="mitschriften"
        @fetchMitschriften="fetchMitschriften"
        @removeMitschrift="removeMitschrift"
        @delMitschrift="delMitschrift"
        @addMitschrift="addMitschrift"
      />
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
    datum: new Date(),
    db: null,
    id: '',
    bildData: '',
    serverAddress: process.env.VUE_APP_SERVER,
  }),

  async created() {
    await this.fetchMitschriften();
    await this.openDB();
    await this.getStoredMitschriften();
  },

  methods: {
    async fetchMitschriften() {
      const { data } = await axios({
        url: this.serverAddress + '/mitschriften',
        method: 'GET',
      });
      this.mitschriften = data;
    },

    async delMitschrift(id) {
      await axios({
        url: this.serverAddress + '/mitschriften/' + id,
        method: 'DELETE',
      });
    },
    async addMitschrift(picturebase64) {
      await axios({
        url: this.serverAddress + '/mitschriften',
        method: 'POST',
        contentType: 'application/json',
        data: {
          date: this.datum.toLocaleDateString('en-GB'),
          img: picturebase64,
        },
      });
      this.fetchMitschriften();
    },

    async openDB() {
      this.db = await openDB('mitschriftenDB', 1, {
        upgrade(db) {
          db.createObjectStore('mitschriften', { keyPath: 'id' });
        },
      });
    },

    async getStoredMitschriften() {
      await this.db.getAll('mitschriften');
      for (const m of this.mitschriften) {
        await this.db.put('mitschriften', m);
      }
    },

    async removeMitschrift(id) {
      await this.db.delete('mitschriften', id);
    },

    async indexAdd(data) {
      await this.db.put('mitschriften', data);
    },
  },
};
</script>
