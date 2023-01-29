let weather = {
    "apiKey":"6165976534664ba7021e9959c88ae672",
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
            .then((Response)=>Response.json())
            .then((data)=>this.displayWeather(data));
    },
    displayWeather : function(data){
        const{ name } = data;
        const{ icon,description } = data.weather[0];
        const{ humidity,temp } = data.main;
        const{ speed } = data.wind;
        console.log(name,description,humidity,temp,icon,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = " "+description;
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/4096x2160/?"+name+"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
};
document.querySelector(".search button").addEventListener("click", function(){weather.search();});
document.querySelector(".search-bar").addEventListener("keyup", function(event){if (event.key=="Enter"){weather.search();}})
function getWeather(){
    
    let apiKey = "6165976534664ba7021e9959c88ae672";
    let api = "https://api.openweathermap.org/data/2.5/weather";

    navigator.geolocation.getCurrentPosition(success,error);
    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    
        let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=metric";
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const{ name } = data;
            const{ icon,description } = data.weather[0];
            const{ humidity,temp } = data.main;
            const{ speed } = data.wind;
            console.log(name,description,humidity,temp,icon,speed,latitude,longitude)
            document.querySelector(".city").innerText = "Weather in " + name + " (" + latitude + "°, " + longitude + "°)";
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
            document.querySelector(".description").innerText = " "+description;
            document.querySelector(".humidity").innerText = "Humidity: "+ humidity +"%";
            document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
            document.querySelector(".temp").innerText = temp +"°C";
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage="url('https://source.unsplash.com/4096x2160/?"+name+"')"

          });
      }
    
      function error() {
        location.innerHTML = "Unable to retrieve your location";
      }
    }
    getWeather();