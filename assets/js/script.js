var searchBtn = document.getElementById("searchBtn");
var cityList = document.querySelector('ul');

//Setting up Local Storage
function displayCity() {
    var inputCity = localStorage.getItem("inputCity");
    inputCity.textContent = inputCity;
    
}

searchBtn.addEventListener("click", function(event) {
    searchAPI();
   
});

const searchAPI = function() {
    var city = document.querySelector("#inputCity").value;
    var getURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=39ef46502d75ea57b3d7957787e6e636`;
    fetch(getURL)
        .then(function (response) {
            return response.json();
        }).then(function(responseObj){
            console.log(responseObj)
            saveCity();
        })     
}


const saveCity = function(){
    var cityInput = document.getElementById("inputCity").value;
    console.log(document.querySelector("inputCity"))
    var cityList = JSON.parse (localStorage.getItem("cityHistory"))
    if (cityList === null) {
        cityList = []
    }
    cityList.push (cityInput)
    localStorage.setItem ("cityHistory" , JSON.stringify(cityList))
    renderCityList(cityList);
    //print a button for each item in array
};


const renderCityList = function(cityList){
    for (let i = 0; i < cityList.length; i++) {
        const element = array[index];
        
    }


};