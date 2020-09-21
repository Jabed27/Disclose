const firebase = require('./FirebaseConnect')
const database = firebase.firestore();
const usersCollection = database.collection('user');
const bcrypt = require('bcrypt');

class UserModel{
  static AllUsersData={};
    constructor()
  {

  }
  logger()
{
    var Mp= new Map(Object.entries(UserModel.AllUsersData));
    //printing all user details on server
    console.log("printing all users data on server: ");
    for (let [key, value] of Mp) 
    {
        console.log(key + ' ==== ' +JSON.stringify(value,null,4) +"\n");
    }
    
}
//storing to the data base
  async StoreSingnUpUser(firstname,lastname,email,address,nid,hash,id){
    UserModel.AllUsersData[id]={
      'First_Name':firstname,
      'Last_Name':lastname,
      'Email':email,
      'Address':address,
      'NID':nid,  
  } ;
    //var uid = usersCollection.doc().id;
    console.log(id);
    await usersCollection.doc(id).set({
        First_Name:firstname,
        Last_Name:lastname,
        Email:email,
        Address:address,
        NID:nid,
        Password:hash,
        userid:id
      })
      this.logger();
      //return uid;
  }
// edit user data
  async EditUser(firstname,lastname,address,nid,id){
    console.log(id);
    //console.log(JSON.stringify(UserModel.AllUsersData[id]))
    this.logger();
    UserModel.AllUsersData[id]={
      'First_Name':firstname,
      'Last_Name':lastname,
      'Address':address,
      'NID':nid,
  } ;
    await usersCollection.doc(id).set({
        First_Name:firstname,
        Last_Name:lastname,
        //Email:email,
        Address:address,
        NID:nid,
        //Password:hash,
    }, {merge: true})
  }
   //firebase theke read
   GetUserData(){
    usersCollection.get().then(snapshot => {
      snapshot.forEach(user => {
        //console.log(user.id, ' => ', user.data());
        var uid=user.id;
        var fname=user.data()['First_Name'];
        var lname=user.data()['Last_Name'];
        var address=user.data()['Address'];
        var nid=user.data()['NID'];
        //server loading
        UserModel.AllUsersData[uid]={
          'First_Name':fname,
          'Last_Name':lname,
          'Address':address,
          'NID':nid,
          
      } ;
        //console.log(loadAllContactUser)
      });
      this.logger();
    })
    .catch(error => {
      console.error(error);
    });
  }
  //read particuler user data from server
  readUserData(uid)
  { 
      var userInfo=UserModel.AllUsersData[uid];
      return userInfo;
  }
  
  
}
module.exports ={
    UserModel,
  } 