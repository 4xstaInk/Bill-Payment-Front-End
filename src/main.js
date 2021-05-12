// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import Bootstrap an BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// VueMaterial
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
// Vue-tel-input
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.config.productionTip = false
// Font Awesome
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue Material
Vue.use(VueMaterial);
// Vue-tel-input
Vue.use(VueTelInput);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
