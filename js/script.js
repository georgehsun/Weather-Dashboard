$(document).ready(function(){

   $('#submitWeather').click(function(){

    var city=('#city').valueOf();
    if(city != ''){

    }else {
        $('error').html('field cannot be emty');
    }

   })

});




