function bookDelivery(){

let item=document.getElementById("item").value;

let address=document.getElementById("address").value;

db.collection("delivery").add({

item:item,

address:address,

status:"new"

})

.then(()=>{

alert("Delivery Booked");

});

}
