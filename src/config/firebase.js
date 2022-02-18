import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDauY57Hd4qBpvSS98vMxIFnN3t_9FpSWc",
    authDomain: "firstproject-6b7f3.firebaseapp.com",
    projectId: "firstproject-6b7f3",
    storageBucket: "firstproject-6b7f3.appspot.com",
    messagingSenderId: "990600885574",
    appId: "1:990600885574:web:69846402009e31e2f8e147"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

function register(email, password, fullName) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User Add Successfully')
            db.collection('users').add({email, fullName})
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

function allUsersData(email, password, fullName) {
    return db.collection("users").get()
}

export {
    register,
    login,
    allUsersData
}