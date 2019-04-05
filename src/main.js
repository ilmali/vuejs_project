import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.component(VueCarousel.name, VueCarousel);

const router = new VueRouter({
routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
   router: router
})
