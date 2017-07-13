// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

import { PaletteButton } from 'mint-ui';

Vue.component(PaletteButton.name, PaletteButton);
import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
//Mint UI 引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
