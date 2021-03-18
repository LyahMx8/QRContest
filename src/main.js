import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent/HomeComponent.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
	{ path: '/home', component: HomeComponent },
	{ path: '/', component: HomeComponent }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
