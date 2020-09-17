const firebase  = require('./FirebaseConnect');
const database = firebase.firestore();
const problemcollection = database.collection('SharedProblem');
const loadAllproblem = {}
class ProblemShare{
    constructor(){
            
    }
    //storing to the server
  storeuserProblemToServer(uid,name,location,catagory,complain,anonymous){
    const details={
      'Complainer_name':name,
      'Location':location,
      'Problem_Catagory':catagory,
      'Complain':complain,
      'Anonymous':anonymous,
  };
  var data = [];
  data.push(details);
  loadAllproblem[uid] = details;
  //console.log("All prob "+JSON.stringify(loadAllproblem));
  }
   async storeSharedProblem(Name,location,catagory,complain,anonymous,res){
    var uid = problemcollection.doc().id;
            await problemcollection.doc().set({
                Complainer_name:Name,
                Location:location,
                Problem_Catagory:catagory,
                Complain:complain,
                Anonymous:anonymous
              })
              return uid;
    }
   //firebase theke read hocche
    GetAllstoredComplain(res){
      problemcollection.get().then(snapshot => {
        snapshot.forEach(user => {
          loadAllproblem[user.id] = user.data();
          //console.log(user.id, ' => ', user.data());
          //console.log(JSON.stringify(loadAllproblem))
        });
       
      })
      .catch(error => {
        console.error(error);
      });
    }
//server theke read korbe
GetloadAlluserdproblemfromserver(){
  return loadAllproblem;
}

    GetSpecificComplain(res){
      
      const query = problemcollection.where('Location', '==', 'Hatirpool').where('Problem_Catagory','==','Wasa');
      query.get().then(snapshot => {
        snapshot.forEach(user => {
          console.log(user.id, ' => ', user.data());
        });
        res.status(201).json({
          message:"problem shown!"
      })
      })
      .catch(error => {
        console.error(error);
      });
    }
}
module.exports={
    ProblemShare,
    
}