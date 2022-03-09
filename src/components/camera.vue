<template>
  <div>
    <v-easy-camera
      v-model="bild"
      output="blob"
      :mustApprove="true"
      @approve="downloadImage"
      @close="closeCamera()"
    >
    </v-easy-camera>
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';
export default {
  components: {
    'v-easy-camera': EasyCamera,
  },

  data() {
    return {
      picture64: '',
      bild: Blob,
    };
  },

  methods: {
    closeCamera() {
      this.$router.push('/aufnahme');
    },
    downloadImage() {
      const reader = new FileReader();
      reader.readAsDataURL(this.bild);
      reader.onloadend = () => {
        const base64 = reader.result;
        this.picture64 = base64;
        this.$emit('addMitschrift', this.picture64);
        this.$router.push('/aufnahme');
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
