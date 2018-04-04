// get data from api
// API KEY b0de66d3353f0553ea9afe07f0188c71

// The FCC weather api is using openweathermap.org and has 18 different icons to show the weather
//      It does this in a range (represented bellow). As for the missing chunks in the range, I'm up
//      for a loss as to why. Also as to why some of the icons are duplicates (not many), I don't know why.
// 
//      icons: 01d 01n 02d 02n 03d 03n 04d 04n 09d 09n 11d 11n 13d 13n 50d 50n 
//      Group 2xx: Thunderstorm     (200 201 202 210 211 212 221 230 231 232) icon 11d
//      Group 3xx: Drizzle          (300 301 302 310 311 312 313 314 321) icon 09d
//      Group 5xx: Rain             (500 501 502 503 504) icon 10d (511) icon 13d (520 521 522 531) icon 09d
//      Group 6xx: Snow             (600 601 602 611 612 615 616 620 621 622) icon 13d () icon 
//      Group 7xx: Atmosphere       (701 711 721 731 741 751 761 762 771 781) icon 50d
//      Group 800: Clear            (800) icon 01d 01n
//      Group 80x: Clouds           (801) icon 02d 02n (802) icon 03d 03n (803 804) icon 04d 04n
//      Group 90x: Extreme          (900 901 902 903 904 905 906) icon none
//      Group 9xx: Additional       (951 952 953 954 955 956 957 598 959 960 961 962) icon none

// Weatherbit.io seems to have about 33 * 2 = 66 different icons for the different states that can occur

// For both, they have an ID/(weather)Code that can help identify the type of icon to be used.
//      They also give the icon code to be used, but in the case of the FCC one, it sometimes gives a link 
//      to an icon and in others it just gives the icon name. As for Weatherbit.io I don't know if it has
//      the same problem.

// wunderground has 24 icons that it displays for its weather

$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(data){
            //     $.getJSON("json/example-JSON.json", function(data){
            //     $("#location").html("City: " + data.name);
            // });
            let APIKEY = "b0de66d3353f0553ea9afe07f0188c71";
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon="+ position.coords.longitude + "&units=imperial&APPID="+ APIKEY,
                success:function(data){
                    let f;

                    $("#location").html( data.name + ", ");
                    $("#type-icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
                    $("#type-text").html(data.weather[0].main);
                    // $("#temp").html("Temp: " + data.main.temp + "C");

                    // f = (32 + ((9 / 5) * data.main.temp)).toFixed(2);
                    // c = ((5/9) * (f - 32)).toFixed(2);
                    f = (data.main.temp).toFixed(1);
                    $("#temp").html( f + "F");

                    // This is where the background img will be changed
                    // 01d 01n 02d 02n 03d 03n 04d 04n 09d 09n 11d 11n 13d 13n 50d 50n data.weather[0].icon
                    if(data.weather[0].main === "Clouds"){
                        $(".back").css({
                            "background-image": "url('pics/pexels-photo-285983.jpeg')",
                            "background-position": "center",
                            "background-size": "cover"
                        });
                        
                    }
                    //         
                    switch (data.weather[0].icon) {
                        case "01d":
                            $(".weather-img").css({
                                "background-image": "url(pics/clear.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clear.jpg)"
                            });
                            break;

                        case "01n":
                            $(".weather-img").css({
                                "background-image": "url(pics/clear-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clear-night.jpg)"
                            });
                            break;

                        case "02d":
                            $(".weather-img").css({
                                "background-image": "url(pics/scattered-clouds-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/scattered-clouds-2.jpg)"
                            });
                            break;

                        case "02n":
                            $(".weather-img").css({
                                "background-image": "url(pics/scattered-clouds-night-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/scattered-clouds-night-2.jpg)"
                            });
                            break;

                        case "03d":
                            $(".weather-img").css({
                                "background-image": "url(pics/clouds.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clouds.jpg)"
                            });
                            break;

                        case "03n":
                            $(".weather-img").css({
                                "background-image": "url(pics/clouds-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clouds-night.jpg)"
                            });
                            break;
                        
                        case "04d":
                            $(".weather-img").css({
                                "background-image": "url(pics/breaking-clouds.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/breaking-clouds.jpg)"
                            });
                            break;
                            
                        case "04n":
                            $(".weather-img").css({
                                "background-image": "url(pics/breaking-clouds-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/breaking-clouds-night.jpg)"
                            });
                            break;

                        case "09d":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-2.jpg)"
                            });
                            break;

                        case "09n":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-night.jpg)"
                            });
                            break;

                        case "10d":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-3.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-3.jpg)"
                            });
                            break;
                            
                        case "10n":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-night-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-night-2.jpg)"
                            });
                            break;

                        case "11d":
                            $(".weather-img").css({
                                "background-image": "url(pics/lightning.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/lightning.jpg)"
                            });
                            break;

                        case "11n":
                            $(".weather-img").css({
                                "background-image": "url(pics/lightning-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/lightning-night.jpg)"
                            });
                            break;
                        
                        case "13d":
                            $(".weather-img").css({
                                "background-image": "url(pics/snow-landscape-trees-winter.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/snow-landscape-trees-winter.jpg)"
                            });
                            break;
                            
                        case "13n":
                            $(".weather-img").css({
                                "background-image": "url(pics/snow-night-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/snow-night-2.jpg)"
                            });
                            break;

                        case "50d":
                            $(".weather-img").css({
                                "background-image": "url(pics/fog.jpeg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/fog.jpeg)"
                            });
                            break;

                        case "50n":
                            $(".weather-img").css({
                                "background-image": "url(pics/fog-night.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/fog-night.jpg)"
                            });
                            break;

                        default:
                            break;
                    }
                },
                dataType: "jsonp",
                // key: APIKEY
            });

            // $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, 
                // function(data){
                //     let f;

                //     $("#location").html("City: " + data.name);
                //     $("#type-icon").html("<img src='" + data.weather[0].icon + "'>");
                //     $("#type-text").html(data.weather[0].main);
                //     // $("#temp").html("Temp: " + data.main.temp + "C");

                //     f = (32 + ((9 / 5) * data.main.temp)).toFixed(2);
                //     // c = ((5/9) * (f - 32)).toFixed(2);
                //     $("#temp").html("Temp: " + f + "F");

                //     // This is where the background img will be changed
                //     if(data.weather[0].main === "Clouds"){
                //         $(".back").css({
                //             "background-image": "url('pics/pexels-photo-285983.jpeg')",
                //             "background-position": "center",
                //             "background-size": "cover"
                //         });
                        
                //     }
                // }
            // );
            // (c * (9/5)) + 32 = f
            // f = 32 + ((9/5) * c)


            // $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
            // $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        });
    }
});

// $(document).ready(function(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             // $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(data){
//             //     $.getJSON("json/example-JSON.json", function(data){
//             //     $("#location").html("City: " + data.name);
//             // });
//             $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, 
//                 function(data){
//                     let f;

//                     $("#location").html("City: " + data.name);
//                     $("#type-icon").html("<img src='" + data.weather[0].icon + "'>");
//                     $("#type-text").html(data.weather[0].main);
//                     // $("#temp").html("Temp: " + data.main.temp + "C");

//                     f = (32 + ((9 / 5) * data.main.temp)).toFixed(2);
//                     c = ((5/9) * (f - 32)).toFixed(2);
//                     $("#temp").html("Temp: " + f + "F");

//                     // This is where the background img will be changed
//                     if(data.weather[0].main === "Clouds"){
//                         $(".back").css({
//                             "background-image": "url('pics/pexels-photo-285983.jpeg')",
//                             "background-position": "center",
//                             "background-size": "cover"
//                         });
                        
//                     }
//                 }
//             );
//             // (c * (9/5)) + 32 = f
//             // f = 32 + ((9/5) * c)


//             // $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//             // $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//         });
//     }
// });


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         // $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(data){
//         //     $.getJSON("json/example-JSON.json", function(data){
//         //     $("#location").html("City: " + data.name);
//         // });
//         $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(data){
//             $("#location").html("City: " + data.name);
//             $("#type-icon").html(data.weather.icon);
//             $("#type-text").html(""+data.weather.main);
//             $("#temp").html("Temp: " + data.main.temp);
//         });
//         $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//         // $("#title").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//     });
// }