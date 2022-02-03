<template>
  <v-container class="text-center">
    <div class="pa-5">
      <h1>Hallo!</h1>
      <h2>Willkommen bei vData.</h2>
      <h2>Mithilfe von vData können Sie ein</h2>
      <h2>Tafelbild fotografieren und in Text umwandeln.</h2>
    </div>

    <div>
      <v-btn outlined x-large width="200" class="mb-5 mt-5" to="/aufnahme">SCAN | FOTO</v-btn>
      <br />
      <v-btn outlined x-large width="200" class="mt-5" to="/galerie">GALERIE</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
