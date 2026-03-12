function applyJob(){

let name=document.getElementById("name").value;

let skill=document.getElementById("skill").value;

db.collection("candidates").add({

name:name,

skill:skill

})

.then(()=>{

alert("Application Submitted");

});

}
