import { createApp } from 'vue'; // Import createApp function
import App from './App.vue';
import router from './router';

// Create a Vue app instance using createApp
const app = createApp(App);

// Use the router with the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');
