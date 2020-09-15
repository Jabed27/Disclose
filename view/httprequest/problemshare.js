const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'
        if(data){
            xhr.setRequestHeader('Content-Type','application/json');
        
        }
        xhr.onload = () =>{
            resolve(xhr.response);
            console.log(xhr.response)
        };
        xhr.send(JSON.stringify(data));
    });
    alert('problem sent successfully!')
    return promise;
}

const sendproblem=()=>{
    //var emailvalue = document.getElementById('InputEmail1').value;
    var selarea = document.getElementById('areaSelect');
    console.log(selarea.value );//hatirpool
    var opt1 = selarea.options[selarea.selectedIndex];
    console.log("area"+opt1.value );//hatirpool
    console.log( "area"+opt1.text );//hatirpool
    var selprob = document.getElementById('problemSelect');
    console.log( selprob.value );//wasa
    var opt = selprob.options[selprob.selectedIndex];
    console.log("prob"+ opt.value );//wasa
    console.log( "prob"+opt.text );//wasa
    var selanonymous = document.getElementById('anonymousSelect');
    console.log( selanonymous.value );//true
    var namevalue = document.getElementById('Inputname').value;
    var msgvalue = document.getElementById('inputTextarea').value;
    console.log("hi"+document.getElementById('inputTextarea').value);
    console.log("hi"+document.getElementById('Inputname').value);
    sendHttpRequest('POST','http://localhost:3000/disclose/api/problemshare/store',{
        name:namevalue,
        Location:opt1.value,
        Problem_Catagory:opt.value,
        Complain:msgvalue,
        Anonymous:selanonymous.value
    });
};
document.getElementById("post-btn").addEventListener('click', e => {
    e.preventDefault();
    sendproblem();
});