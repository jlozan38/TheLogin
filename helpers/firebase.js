import Vue from "vue"

import firebase from "firebase/app"
import "firebase/firebase-auth"

import * as firebaseui from "firebaseui"

const firebaseConfig = {
    apiKey: "AIzaSyCqCX6w3gqCc32rb2OhAZxVcA5rH36jDCc",
    authDomain: "loginexmaple-4e2ac.firebaseapp.com",
    databaseURL: "https://loginexmaple-4e2ac.firebaseio.com",
    projectId: "loginexmaple-4e2ac",
    storageBucket: "loginexmaple-4e2ac.appspot.com",
    messagingSenderId: "1029359795585",
    appId: "1:1029359795585:web:ecf904caa584d88ebe3c80"
}

firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui