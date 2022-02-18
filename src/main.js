import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import EasyCamera from 'easy-vue-camera';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  EasyCamera,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
