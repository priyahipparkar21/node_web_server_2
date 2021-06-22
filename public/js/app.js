//const fetch = require("node-fetch");

console.log('Client side javascript file is loaded!')



const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo=document.querySelector('#message-2');

messageOne.textContent='Loading...';
messageTwo.textContent='';

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    //console.log(location)

    fetch('http://api.weatherstack.com/current?access_key=921b541080e0578f0849485bee951f8d&query='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }
        //console.log(data);
        //document.write(data.location.name);
        else{
            console.log(data)
            messageOne.textContent=data.location.name
            messageTwo.textContent=data.current.weather_descriptions[0]
        }
    })
})

})


