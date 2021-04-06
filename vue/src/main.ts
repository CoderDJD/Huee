import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyCiGY4B5fiD4IP_WYfgh6L83yxkGx5UARI",
  authDomain: "huee-firebase-service.firebaseapp.com",
  projectId: "huee-firebase-service",
  storageBucket: "huee-firebase-service.appspot.com",
  messagingSenderId: "1081940587479",
  appId: "1:1081940587479:web:539df76e6c705534b31192"
});
Vue.config.productionTip = false;
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
