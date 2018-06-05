import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'img/e3bd8ea1/loading.gif',
  loading: 'img/e3bd8ea1/loading.gif',
  attempt: 1
});
