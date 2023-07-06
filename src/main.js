import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Manually provide state management
// Step: 1 - Create a vue project using vue/cli or vue@latest without state management 
// Step: 2 - Create a folder 'store' under src and Create a file index.js under store folder
// Step: 3 - import { createStore } from 'vuex' in index.js file under store 
// Step: 4 - Write the code for the variables that changes the state
// Step: 5 - Use it in various components as this.$store.state.property

// Way -1 to use (state management/store) in the application 
createApp(App).use(store).use(router).mount('#app')

// Way -2 to use (state management/store) in the application 
// const app=createApp(App);
// app.provide("store",store);
// app.mount("#app");

