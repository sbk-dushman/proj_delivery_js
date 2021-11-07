const cardsContainer = document.querySelector('.cards-restaurants'); 
console.log(cardsContainer);
const renderItems = (data)=>{
    data.forEach((element, index) => {
        console.log(element);
    });
 

}
fetch('https://delivery-js-test-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=>{
     
        renderItems(data);
    }).catch((error)=>{
        console.log(error);
    })

