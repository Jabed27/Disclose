const firebase = require('./FirebaseConnect')
const database = firebase.firestore();
const usersCollection = database.collection('Contact');
//loadAllContactUser will store all the contacts globally at the first time when the server run
const loadAllContactUser = {}
class ContactModel{
  
  constructor()
  {

  }
  //storing to the server
  storeuserDataToServer(uid,username,useremail,message){
    const details={
      'name':username,
      'email':useremail,
      'message':message
  };
  var data = [];
  data.push(details);
  loadAllContactUser[uid] = details;
  console.log(JSON.stringify(loadAllContactUser));
  }
  //database storing
  async storeUserData(Name,Email,Message,res){
     var uid = usersCollection.doc().id;
     console.log(uid)
    await usersCollection.doc(uid).set({
      name: Name,
      email: Email,
      message: Message
    })
    return uid;//uid needed for storing in the server
    
  };

  //firebase theke read
  GetContactUserData(){
    usersCollection.get().then(snapshot => {
      snapshot.forEach(user => {
        //console.log(user.id, ' => ', user.data());
        loadAllContactUser[user.id] = user.data();
        //console.log(loadAllContactUser)
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  //server theke read korbo
  GetloadAllcontactuserdata(){
     return loadAllContactUser;
  }
  //admin will see 
  getDataForAdmin(){
    console.log(loadAllContactUser)
  }
}

module.exports ={
  ContactModel,
} 