<template>
  <div class="text-center">
    <h1>Fotografieren Sie hier die Tafel ab</h1>
    <v-btn to="/">Home</v-btn>
    <br />
    <v-row>
      <v-col cols="1">
        <v-easy-camera @close="closeCamera" style="transform: translate(-50%, -50%); left: 50%; top: 50%; height: 70%; width: 50%">
        </v-easy-camera>
      </v-col>
      <v-col cols="1"
        ><v-btn x-large outlined><v-icon color="green">mdi-image-plus</v-icon></v-btn></v-col
      >
      <v-col cols="10"
        ><v-btn x-large outlined><v-icon color="red">mdi-image-remove</v-icon></v-btn></v-col
      >
    </v-row>

    >
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';
export default {
  components: {
    'v-easy-camera': EasyCamera,
  },
  methods: {
    close(){
      
    }
  },
};
</script>

<style lang="scss" scoped></style>
