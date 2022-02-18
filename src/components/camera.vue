<template>
  <div>
    <v-easy-camera @close="closeCamera()"> </v-easy-camera>
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';

export default {
  components: {
    'v-easy-camera': EasyCamera,
  },
  methods: {
    closeCamera() {
      this.$router.push('/aufnahme');
    },
  },
};
</script>

<style lang="scss" scoped></style>
