const restorant='foot-band';
const renderItems = ()=>{

}
fetch(`./db/${restorant}.json`)
    .then((response)=>response.json)
    .then((data)=>{
        renderItems(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally()

