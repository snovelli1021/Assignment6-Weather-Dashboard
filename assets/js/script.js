var searchBtn = document.getElementById("searchBtn");


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
    var getURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=39ef46502d75ea57b3d7957787e6e636`;
    fetch(getURL)
        .then(function (response) {
            return response.json();
        }).then(function(responseObj){
            console.log(responseObj)
            var lat = responseObj [0].lat
            var lon = responseObj [0].lon
            var weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=39ef46502d75ea57b3d7957787e6e636&units=imperial`
            fetch(weatherURL)
            .then(function(response){
                return response.json();
            }).then(function(weatherData){
                console.log(weatherData);
                document.querySelector(".temp").innerText = weatherData.current.temp + " °"
                document.querySelector(".humidity").innerText = weatherData.current.humidity + "%"
                document.querySelector(".wind_speed").innerText = weatherData.current.wind_speed
                document.querySelector(".uvi").innerText = weatherData.current.uvi
                displayUVI(weatherData.current.uvi);
            })
            saveCity();
        })     
}

function displayUVI(UVI) {
    var uviEl = document.querySelector(".uvi")
    uviEl.classList.remove("low" , "high")
if (UVI < 2){
  uviEl.classList.add("low")  
} else if (UVI > 2) {
    uviEl.classList.add("high") 
}

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
    var cityListEl = document.querySelector('#cityList');
    for (let i = 0; i < cityList.length; i++) {
        console.log(cityList[i]);
        var cityBtns = document.createElement("button")
        cityBtns.innerText = cityList [i]
        cityListEl.appendChild(cityBtns)
    }

};