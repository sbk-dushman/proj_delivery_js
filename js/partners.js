const renderItems = (data)=>{
    // console.log(data);
    data.forEach((element, index) => {
        console.log(element);
    });
 

}
fetch('https://delivery-js-test-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=>{
     
        grenderItems(data);
    }).catch((error)=>{
        console.log(error);
    })

