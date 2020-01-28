// $(document).ready(function(){

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
 

//adding my api
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=c543d81336efb61834c78f11f88bf83b", function(data){
     console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    console.log(icon);
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
 });