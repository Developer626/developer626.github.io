var temp, scale = true;

$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
           
            let APIKEY = "b0de66d3353f0553ea9afe07f0188c71";
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon="+ position.coords.longitude + "&units=imperial&APPID="+ APIKEY,
                success:function(data){
                    let f;

                    $("#location").html( data.name + ", ");
                    $("#type-icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
                    $("#type-text").html(data.weather[0].main);
                    $("#temp-reading-change").html("<button id='button' onclick='fToC()'>Change to &#176;C</button>")

                    temp = (data.main.temp).toFixed(1);
                    $("#temp").html( temp + "&#176;F");

                    
                    switch (data.weather[0].icon) {
                        case "01d":
                            $(".weather-img").css({
                                "background-image": "url(pics/clear_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clear_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/agriculture-blue-sky-clear-sky-clouds-518415/'>https://www.pexels.com/photo/agriculture-blue-sky-clear-sky-clouds-518415/</a>");
                            break;

                        case "01n":
                            $(".weather-img").css({
                                "background-image": "url(pics/clear-night-3_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clear-night-3_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/white-and-black-moon-with-black-skies-and-body-of-water-photography-during-night-time-748626/'>https://www.pexels.com/photo/white-and-black-moon-with-black-skies-and-body-of-water-photography-during-night-time-748626/</a>"); 
                            break;

                        case "02d":
                            $(".weather-img").css({
                                "background-image": "url(pics/scattered-clouds-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/scattered-clouds-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/sky-clouds-cloudy-earth-46160/'>https://www.pexels.com/photo/sky-clouds-cloudy-earth-46160/</a>");
                            break;

                        case "02n":
                            $(".weather-img").css({
                                "background-image": "url(pics/scattered-clouds-night-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/scattered-clouds-night-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/clouds-dark-dark-clouds-darkness-416920/'>https://www.pexels.com/photo/clouds-dark-dark-clouds-darkness-416920/</a>");
                            break;

                        case "03d":
                            $(".weather-img").css({
                                "background-image": "url(pics/clouds-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clouds-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/brown-house-near-green-leaf-tree-976846/'>https://www.pexels.com/photo/brown-house-near-green-leaf-tree-976846/</a>");
                            break;

                        case "03n":
                            $(".weather-img").css({
                                "background-image": "url(pics/clouds-night-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/clouds-night-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/sea-at-night-time-807325/'>https://www.pexels.com/photo/sea-at-night-time-807325/</a>");
                            break;
                        
                        case "04d":
                            $(".weather-img").css({
                                "background-image": "url(pics/breaking-clouds_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/breaking-clouds_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/beach-clouds-dawn-dusk-391522/'>https://www.pexels.com/photo/beach-clouds-dawn-dusk-391522/</a>");
                            break;
                            
                        case "04n":
                            $(".weather-img").css({
                                "background-image": "url(pics/breaking-clouds-night_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/breaking-clouds-night_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/new-york-city-during-nighttime-773297/'>https://www.pexels.com/photo/new-york-city-during-nighttime-773297/</a>");
                            break;

                        case "09d":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/water-rain-wet-drops-69927/'>https://www.pexels.com/photo/water-rain-wet-drops-69927/</a>");
                            break;

                        case "09n":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-night_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-night_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/lights-water-blur-rain-21492/'>https://www.pexels.com/photo/lights-water-blur-rain-21492/</a>");
                            break;

                        case "10d":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-3_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-3_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/car-drops-of-water-glass-rain-1553/'>https://www.pexels.com/photo/car-drops-of-water-glass-rain-1553/</a>");
                            break;
                            
                        case "10n":
                            $(".weather-img").css({
                                "background-image": "url(pics/rain-night-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/rain-night-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/abstract-arrangement-art-background-457713/'>https://www.pexels.com/photo/abstract-arrangement-art-background-457713/</a>");
                            break;

                        case "11d":
                            $(".weather-img").css({
                                "background-image": "url(pics/lightning_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/lightning_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/clouds-country-countryside-dawn-458785/'>https://www.pexels.com/photo/clouds-country-countryside-dawn-458785/</a>");
                            break;

                        case "11n":
                            $(".weather-img").css({
                                "background-image": "url(pics/lightning-night-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/lightning-night-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/brown-and-beige-wooden-barn-surrounded-with-brown-grasses-under-thunderclouds-99577/'>https://www.pexels.com/photo/brown-and-beige-wooden-barn-surrounded-with-brown-grasses-under-thunderclouds-99577/</a>");
                            break;
                        
                        case "13d":
                            $(".weather-img").css({
                                "background-image": "url(pics/snow-landscape-trees-winter_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/snow-landscape-trees-winter_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/snow-landscape-trees-winter-4620/'>https://www.pexels.com/photo/snow-landscape-trees-winter-4620/</a>");
                            break;
                            
                        case "13n":
                            $(".weather-img").css({
                                "background-image": "url(pics/snow-night-3_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/snow-night-3_ver-2.jpg)"
                            });
                            // $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/photography-of-trees-covered-with-snow-773594/'>https://www.pexels.com/photo/photography-of-trees-covered-with-snow-773594/</a>");
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/photo-of-snow-covered-benches-in-the-park-764562/'>https://www.pexels.com/photo/photo-of-snow-covered-benches-in-the-park-764562/</a>");
                            
                            break;

                        case "50d":
                            $(".weather-img").css({
                                "background-image": "url(pics/fog.jpeg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/fog.jpeg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/nature-forest-trees-fog-4827/'>https://www.pexels.com/photo/nature-forest-trees-fog-4827/</a>");
                            break;

                        case "50n":
                            $(".weather-img").css({
                                "background-image": "url(pics/fog-night-2_ver-2.jpg)"
                            });
                            $(".back").css({
                                "background-image": "url(pics/fog-night-2_ver-2.jpg)"
                            });
                            $("#picture-by").html("Picture by <a href='https://www.pexels.com/photo/red-and-blue-hot-air-balloon-floating-on-air-on-body-of-water-during-night-time-36487/'>https://www.pexels.com/photo/red-and-blue-hot-air-balloon-floating-on-air-on-body-of-water-during-night-time-36487/</a>");
                            break;

                        default:
                            break;
                    }
                },
                dataType: "jsonp",
            });
        });
    }
});

function fToC(){
    let t = temp;

    // f = (32 + ((9 / 5) * data.main.temp)).toFixed(2);
    // c = ((5/9) * (f - 32)).toFixed(2);
    if(scale){
        $("#button").html("Change to &#176;F");
        t = ((5/9) * (temp  - 32)).toFixed(1);
        $("#temp").html( t + "&#176;C");
        scale = false;
    }else {
        $("#button").html("Change to &#176;C");
        t = temp;
        $("#temp").html( t + "&#176;F");
        scale = true;
    }
}