const { credential } = require("firebase-admin")
const firebase = require("firebase-admin")
// const serviceAccount = require("./introductiontobackend-firebase-adminsdk-offpj-bec8162401.json") isi dengan key masing"

firebase.initializeApp({
    credential: credential.cert(serviceAccount)
})

const database = firebase.firestore()
const Users = database.collection("users")

module.exports = Users