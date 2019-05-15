'use strict'
import Vue from 'vue';
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './components/app.vue';

Vue.prototype.$http = Axios;
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(App),
})