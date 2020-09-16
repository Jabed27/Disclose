const sendData=()=>{
    var selarea = document.getElementById('areaSelect');
     //console.log(selarea.value );//hatirpool
      var opt1 = selarea.options[selarea.selectedIndex];
     //console.log("area"+opt1.value );
     var selprob = document.getElementById('problemSelect');
   // console.log( selprob.value );//wasa
    var opt = selprob.options[selprob.selectedIndex];
     var allproblemdata = {};
     fetch('http://localhost:3000/disclose/api/problemshare/read').then(res=>{
       res.json().then(
         data=>{
           //console.log(data);
           let sortDirection = false;
           allproblemdata = data;
           //console.log(allproblemdata)
           const tablebody = document.getElementById('tableData');
           let datatable = ' ';
           
           for(var key of Object.keys(allproblemdata['loadallproblem'])){
             //console.log(key + "->"+ JSON.stringify(allproblemdata['loadallproblem'][key]));
             //console.log(allproblemdata['loadallproblem'][key]['Location'])
             /*if(opt1.value==`${allproblemdata['loadallproblem'][key]['Location']}`){
                datatable += `<tr><td>${allproblemdata['loadallproblem'][key]['Complainer_name']}</td><td>${allproblemdata['loadallproblem'][key]['Location']}</td><td>${allproblemdata['loadallproblem'][key]['Problem_Catagory']}</td><td>${allproblemdata['loadallproblem'][key]['Complain']}</td></tr>`;
                console.log(allproblemdata['loadallproblem'][key]['Location'])
             }*/
             console.log(`${allproblemdata['loadallproblem'][key]['Location']}`)
             if(opt1.value==`${allproblemdata['loadallproblem'][key]['Location']}`&&opt.value==`${allproblemdata['loadallproblem'][key]['Problem_Catagory']}`){
                datatable += `<tr><td>${allproblemdata['loadallproblem'][key]['Complainer_name']}</td><td>${allproblemdata['loadallproblem'][key]['Location']}</td><td>${allproblemdata['loadallproblem'][key]['Problem_Catagory']}</td><td>${allproblemdata['loadallproblem'][key]['Complain']}</td></tr>`;
                console.log(allproblemdata['loadallproblem'][key]['Location'])
             }
            
           }
           tablebody.innerHTML = datatable;

         }
       )
     })
    
};

document.getElementById("post-btn").addEventListener('click', e => {
    e.preventDefault();
    sendData();
});