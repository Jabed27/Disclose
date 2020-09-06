const firebase = require('./FirebaseConnect')
const database = firebase.firestore();
const usersCollection = database.collection('Contact');
//loadAllContactUser will store all the contacts globally at the first time when the server run
const loadAllContactUser = {}
class ContactModel{
  
  constructor()
  {

  }
  storeUserData(Name,Email,Message,res) {
  
    const ID = usersCollection.doc().set({
      name: Name,
      email: Email,
      message: Message
    })
    .then(()=>{
      console.log('Data has been saved successfully !')
      console.log(ID)
      res.status(201).json({
        message:"Contact succesfull!"
    })
    })
      
    .catch(error => {
      console.error(error)
    });
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