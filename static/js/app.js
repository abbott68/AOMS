import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import your Vue components for each route
import Config from './components/Config.vue';

// Define the routes
const routes = [
    { path: '/v1/config', component: Config },
    // Add other routes here
];

// Create the router instance
const router = new VueRouter({
    mode: 'history',
    routes,
});

// Create the Vue app and mount it to the #app element in index.html
new Vue({
    router,
}).$mount('#app');
