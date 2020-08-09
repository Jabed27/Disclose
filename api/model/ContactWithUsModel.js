const firebase = require('./FirebaseConnect')
const database = firebase.firestore();
const usersCollection = database.collection('Contact');

class ContactModel{

  constructor()
  {

  }
  storeUserData(Name,Email,Message,res) {
  
    const ID = usersCollection.doc('user01').set({
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

  
  GetContactUserData(res){
    usersCollection.get().then(snapshot => {
      snapshot.forEach(user => {
        console.log(user.id, ' => ', user.data());
        res.status(200).json({
          user
        })
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
}

module.exports ={
  ContactModel,
} 