var searchBtn = document.querySelector(".searchBtn");
var cityList = document.querySelector('ul');
var city = document.querySelector("inputCity");


//Setting up API call
function getAPI() {
    var getURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=39ef46502d75ea57b3d7957787e6e636";
    fetch(getURL)
        .then(function (response) {
            return response.json();
        }) 
}

searchBtn.addEventListener('click');
getAPI();




//Setting up Local Storage
function displayCity() {
    var inputCity = localStorage.getItem("inputCity");
    inputCity.textContent = inputCity;
    
}

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("hi");
    var inputCity = document.querySelector("#city").value;
    localStorage.setItem("li", inputCity);
    //localStorage.setItem("city" , inputCity);
    console.log(inputCity);
    displayCity();
 });

