// var cities = JSON.parse(localStorage.getItem('cities'))
var cities = ["Austin"];
//push user's cities to this array
//use a function to display this array to the page

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
    // console.log(localStorage);

    if (cities.length > 0) {
        searchColumn.removeClass('col-12').addClass('col-4')
        weatherColumn.removeClass('hide').addClass('col-8')

        displayCity(cities[0]);
    }



    $('#submitWeather').click(function() {

        $(".temp").empty();
        $(".humidity").empty();
        $(".windspeed").empty();
        var userCity = $("#city").val();
        console.log(userCity);

        displayCity(userCity);



        // if (city != '') {

        //     $.ajax({

        //         url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
        //             "&APPID=c543d81336efb61834c78f11f88bf83b",
        //         method: "GET",
        //         dataType: "jsonp",
        //         success: function(data) {
        //             console.log(data);
        //         }
        //     });

        // } else {
        //     $('#error').html('Field cannot be emty');
        // }



    });




    // if (navigator.geolocation){

})

function displayCity(city) {

    //adding my api
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c543d81336efb61834c78f11f88bf83b", function(data) {
        // console.log(data);
        $(".city").html("");

        var icon = "https//openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var humidity = Math.floor(data.main.humidity);
        var windspeed = data.wind.speed

        $('.icon').attr('src', icon);
        $('.city').append("Location: " + city);
        $('.temp').append("Temperature: " + temp + "ºF");
        $('.humidity').append("Humidity: " + humidity + "%");
        $('.windspeed').append("Windspeed: " + windspeed + "MPH");
        $('.UVI').append("UVI: " + UVI);
    });

    getFiveDayForecast(city);
}



function getFiveDayForecast(location) {
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial&appid=c543d81336efb61834c78f11f88bf83b", function(data) {
        console.log(data.list);

        for (var i = 0; i <= 4; i++) {
            console.log(data.list[i])

            var forecastDiv = $("<div>");
            var p = $("<p>").text("temperature:" + data.list[i].main.temp);
            forecastDiv.append(p)
            $("#forecast").append(forecastDiv)
        }





        // $(".city").html("");

        // var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        // console.log(icon);
        // var temp = Math.floor(data.main.temp);
        // var humidity = Math.floor(data.main.humidity);
        // var windspeed = data.wind.speed

        // $('.icon').attr('src', icon);
        // $('.city').append("Location: " + city);
        // $('.temp').append("Temperature: " + temp + "ºF");
        // $('.humidity').append("Humidity: " + humidity + "%");
        // $('.windspeed').append("Windspeed: " + windspeed + "MPH");
        // $('.UVI').append("UVI: " + UVI);
    });
}




// function getFiveDay(city) {
//     const dow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const APIKey = 'c543d81336efb61834c78f11f88bf83b';
// }





$(function() {
    const history = JSON.parse(localStorage.getItem('searchHistory'));
    if (history != null && history.length > 0) {
        for (let i = 0; i < history.length; i++) {
            const btn = $('<button>');
            btn.addClass('w-100 text-left btnCity');
            btn.text(history[i].cities);
            btn.attr('onclick', 'cityButtonClicked(this)');
            $('#searchList').append(btn);
        }
    }
    $('.btn btn-primary').click(function() {
        const city = $('#submitWeather').val();
        const btn = $('<button>');
        btn.addClass('w-100 text-left btnCity');
        btn.text(city);
        btn.attr('onclick', 'cityButtonClicked(this)');
        $('#weatherColumn').append(btn);
        saveSearchHistory(cities);
        lkupCityWeather(cities);
    });
});