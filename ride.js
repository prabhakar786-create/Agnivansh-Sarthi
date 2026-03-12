function bookRide(){

let pickup=document.getElementById("pickup").value;

let drop=document.getElementById("drop").value;

db.collection("rides").add({

pickup:pickup,

drop:drop,

status:"pending"

})

.then(()=>{

alert("Ride Requested");

});

}
