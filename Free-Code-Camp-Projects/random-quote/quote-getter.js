$(document).ready(function(){
    // $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1").done( function(quote){
    //     $("#quote").html(quote[0].content);
    //     $("#author").html("-" + quote[0].title);  
    //     // $("#author-link").html(quote[0].custom_meta.Source);
    //     $("#brought-to-you-by").html(quote[0].link);

    //     let text = document.getElementById("quote").getElementsByTagName("p")[0].innerText;
    //     $("#tweet").html("<a href='https://twitter.com/intent/tweet?text=\"" + text + "\"" + "-" + quote[0].title + "&url=" + quote[0].link +"' class='twitter-share-button' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
    // });
    newQuote();
});

function newQuote(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1").done( function(quote){
        $("#quote").html(quote[0].content);
        $("#author").html("-" + quote[0].title);  
        // $("#author-link").html(quote[0].custom_meta.Source);
        $("#brought-to-you-by").html(quote[0].link);

        let text = document.getElementById("quote").getElementsByTagName("p")[0].innerText;
        $("#tweet").html("<a href='https://twitter.com/intent/tweet?text=\"" + text + "\"" + "-" + quote[0].title + "&url=" + quote[0].link +"' class='twitter-share-button' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
    }).fail( function (){
        console.log("Oops");
    });
}

function newQuote(){
    $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: 
            function(quote) {
                $("#quote").html(quote[0].content);
                $("#author").html("-" + quote[0].title);  
                // $("#author-link").html(quote[0].custom_meta.Source);
                $("#brought-to-you-by").html(quote[0].link);

                let text = document.getElementById("quote").getElementsByTagName("p")[0].innerText;
                $("#tweet").html("<a href='https://twitter.com/intent/tweet?text=\"" + text + "\"" + "-" + quote[0].title + "&url=" + quote[0].link +"' class='twitter-share-button' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
            },
            cache: false
        

    })
}


// $(document).ready(function(){
//     $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en").done( function(quote){
//         $("#quote").html(quote.quoteText);
//         $("#author").html("-" + quote.quoteAuthor);  
//         // $("#author-link").html(quote[0].custom_meta.Source);
//         $("#brought-to-you-by").html(quote.quoteLink);

//         // let text = document.getElementById("quote").getElementsByTagName("p")[0].innerText;
//         $("#tweet").html("<a href='https://twitter.com/intent/tweet?text=\"" + quote.quoteText + "\"" + "-" + quote.quoteAuthor + "&url=" + quote.quoteLink +"' class='twitter-share-button' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
//     });
// });

// function newQuote(){
//     $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en").done( function(quote){
//         $("#quote").html(quote.quoteText);
//         $("#author").html("-" + quote.quoteAuthor);  
//         // $("#author-link").html(quote[0].custom_meta.Source);
//         $("#brought-to-you-by").html(quote.quoteLink);

//         // let text = document.getElementById("quote").getElementsByTagName("p")[0].innerText;
//         $("#tweet").html("<a href='https://twitter.com/intent/tweet?text=\"" + quote.quoteText + "\"" + "-" + quote.quoteAuthor + "&url=" + quote.quoteLink +"' class='twitter-share-button' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>");
//     }).fail( function (){
//         console.log("Oops");
//     });
// }

function tweetAboutIt(){
    
}