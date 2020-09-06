const firebase  = require('./FirebaseConnect');
const database = firebase.firestore();
const problemcollection = database.collection('SharedProblem');

class ProblemShare{
    constructor(){
            
    }
    storeSharedProblem(Name,location,catagory,complain,likes,dislikes,anonymous,res){
         
            const ID = problemcollection.doc().set({
                Complainer_name:Name,
                Location:location,
                Problem_Catagory:catagory,
                Complain:complain,
                Likes:likes,
                Dislikes:dislikes,
                Anonymous:anonymous
              })
            .then(()=>{
                console.log('Problem saved successfully !')
                res.status(201).json({
                    message:"problem shared succesfully!"
                })
              })
              .catch(error => {
                console.error(error)
              });
    }

    GetAllstoredComplain(res){
      problemcollection.get().then(snapshot => {
        snapshot.forEach(user => {
          console.log(user.id, ' => ', user.data());
        });
        res.status(201).json({
          snapshot
        })
      })
      .catch(error => {
        console.error(error);
      });
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