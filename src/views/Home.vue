<template>
  <v-container class="text-center">
    <div class="pa-5">
      <h1>Hallo!</h1>
      <h2>Willkommen bei vData.</h2>
      <h2>Mithilfe von vData können Sie</h2>
      <h2>ein Tafelbild fotografieren und in die Galerie einfügen.</h2>
    </div>
    <v-btn @click="activateSpeech()"><v-icon>mdi-volume-high</v-icon></v-btn>

    <div>
      <v-btn outlined x-large width="200" class="mb-5 mt-5" to="/aufnahme"
        >AUFNAHME <v-icon class="ml-3">mdi-image-plus</v-icon></v-btn
      >
      <br />
      <v-btn outlined x-large width="200" class="mt-5" to="/galerie"
        >GALERIE <v-icon class="ml-3">mdi-image-multiple</v-icon></v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    activateSpeech() {
      const msg = new SpeechSynthesisUtterance();
      msg.text =
        'Hallo! Willkommen bei v-Data. Mithilfe von v-Data können Sie ein Tafelbild fotografieren und in die Galerie einfügen. Anbei ist die Galerie sowie eine Möglichkeit eine neue Aufnahme zu machen.';
      window.speechSynthesis.speak(msg);
    },
  },
};
</script>
