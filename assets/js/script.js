var cityList = document.querySelector('ul');
var searchBtn = document.querySelector(".searchBtn");


//Setting up API call
function getAPI() {
    var getURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=39ef46502d75ea57b3d7957787e6e636";

    fetch(getURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement("li");
                listItem.textContent = data[i].temp;
                cityList.appendChild(listItem);
            }
        });
}

searchBtn.addEventListener('click', getAPI);





//Setting up Local Storage
function displayCity() {
    var inputCity = localStorage.getItem("city");
    inputCity.textContent = inputCity;
    console.log(inputCity);
}

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var inputCity = document.querySelector("#city").value;
    //localStorage.setItem("li", inputCity);
    localStorage.setItem (cityList.appendChild(inputCity));
    console.log(inputCity);
     displayCity();
 });
