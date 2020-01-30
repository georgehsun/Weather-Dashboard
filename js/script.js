var cities = JSON.parse(localStorage.getItem('cities'))
if (!cities) {
    cities = []
}
var searchColumn = $("#searchColumn")
var weatherColumn = $("#weatherColumn")

// cities.push('Denver')
/* console.log(cities)

var myArr = ['Houston, Tx', 'Austin']
console.log(myArr)
console.log(myArr.toString())
console.log(JSON.stringify(myArr))

localStorage.setItem('cities', JSON.stringify(myArr)) */

$(document).ready(function() {

    if (cities.length > 0) {
        searchColumn.removeClass('col-12').addClass('col-4')
        weatherColumn.removeClass('hide').addClass('col-8')

        displayCity(cities[0])
    }

    //     $('#submitWeather').click(function(){

    //          var city = ("#city").val();

    //          if(city != ''){

    //             $.ajax({

    //                  url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
    //                 "&APPID=c543d81336efb61834c78f11f88bf83b",
    //                 method: "GET",
    //                 dataType: "jsonp",
    //                 success: function(data){
    //                 console.log(data);
    //             }
    //         });

    //      }else {
    //          $('#error').html('Field cannot be emty');
    //      }

    //     });

    //  });




    // if (navigator.geolocation){

})

function displayCity(city) {

    //adding my api
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c543d81336efb61834c78f11f88bf83b", function(data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var humidity = Math.floor(data.main.humidity);
        var windspeed = data.wind.speed
        $('.icon').attr('src', icon);

        $('.temp').append(temp + "ºF");
        $('.humidity').append(humidity + "%");
        $('.windspeed').append(windspeed + "MPH");
    });
}