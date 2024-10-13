let API_key = "067093c16c19b000cab70e5f7dab9d24";
let city_name = document.querySelector('input')

button=document.querySelector("button");
async function fetch_api(city_name) {
    try{
     
    let URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
    let response = await fetch(URL_API);
    
    
    let data = await response.json(); 
   
   window.localStorage.setItem("city",city_name)
    
   document.getElementById("temp").innerHTML=Math.round(data.main.temp-273)+'°C'
    document.getElementById("city_name").innerHTML=data.name
    document.getElementById("humidity").innerHTML=data.main.humidity+'%'
    document.getElementById("win_Speed").innerHTML=data.wind.speed+'km/h'
    console.log((data.weather[0].main))
    console.log(typeof((data.weather[0].main)))
    
    let img_statut=document.querySelector('#statut').src=`/images/${data.weather[0].main.toLowerCase()}.png`


    
}
    
    catch(error){
        console.log('error:',error)

    }
    
}

button.addEventListener("click",()=>{
    fetch_api(city_name.value.trim());
});
if(window.localStorage.length===0){
window.addEventListener('load',fetch_api("new york"))}
else{
    window.addEventListener('load',fetch_api(window.localStorage.getItem("city")));
}
