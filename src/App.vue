<template>
  <v-app>
    <v-app-bar dense dark app>
      <img src="../public/img/icons/android-chrome-192x192.png" width="40" class="mr-3" />
      <v-toolbar-title class="font-weight-bold">vDataa</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <div
        class="red darken-4 white--text text-center"
        style="width: 100%"
        role="alert"
        v-if="this.offline == true"
      >
        You are offline
      </div>
      <v-btn color="primary" @click="subscribe">Subscribe</v-btn>

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
    offline: false,
    // publicVapidKey: 'BEIBBlDQlPgqAyxgqePPGm9pRQPbd1rldHvaZ6Qh_3C3wOYUKs7drFjNH0vztXMBXAyoGf66U68wQZBg7uIojUo',
    bildData: '',
    serverAddress: process.env.VUE_APP_SERVER,
  }),

  async created() {
    console.log('hallo');
    await this.fetchMitschriften();
    await this.openDB();
    await this.getStoredMitschriften();
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
  },

  methods: {
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten.');
    },
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
      navigator.vibrate(400);
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
      navigator.vibrate(400);
    },

    async indexAdd(data) {
      await this.db.put('mitschriften', data);
    },

    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },

    async subscribe() {
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(
          'BEIBBlDQlPgqAyxgqePPGm9pRQPbd1rldHvaZ6Qh_3C3wOYUKs7drFjNH0vztXMBXAyoGf66U68wQZBg7uIojUo',
        ),
      });
      await axios.post(`${this.serverAddress}/subscribe`, subscription);
    },
  },
};
</script>
