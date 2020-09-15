const firebase = require('./FirebaseConnect')
const database = firebase.firestore();
const usersCollection = database.collection('user');
const bcrypt = require('bcrypt');

class UserModel{
    constructor()
  {

  }
  async StoreSingnUpUser(firstname,lastname,email,address,nid,hash){
    var uid = usersCollection.doc().id;
    await usersCollection.doc(uid).set({
        First_Name:firstname,
        Last_Name:lastname,
        Email:email,
        Address:address,
        NID:nid,
        Password:hash,
        userid:uid
      })
      return uid;
  }
  
}
module.exports ={
    UserModel,
  } 