/******************************************
project 2 - Quote Show
******************************************/


/*** 
 * `quotes` array 
***/
var quotesArray = [
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe"
    },
    {
        quote: "Love means never having to say you're sorry.",
        source: "Ali MacGraw",
        citation: "Movie (Love Story)",
        year: "1970"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein"
    },
    {
        quote: "A million dollars isn't cool. You know what's cool? A billion dollars.",
        source: "Sean Parker",
        citation: "Movie (The Social Network)",
        year: "2010"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        source: "Mae West"
    }

];

//console.log(quotesArray);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    var randomNumber = Math.floor(Math.random() * 5);
    //console.log(randomNumber);
    var randomQuote1 = quotesArray[randomNumber];
    //console.log(randomQuote1);
    return randomQuote1;
}
//getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote(){
    var randomQuote = getRandomQuote();
    var pToHtml = "<p class='quote'>" 
    + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;
    if(randomQuote.citation != null){
         pToHtml+="<span class='citation'>"+randomQuote.citation+"</span>";
    }
    if(randomQuote.year != null){
         pToHtml+="<span class='year'>"+randomQuote.year+"</span>";
    }
    pToHtml+="</p>";
    document.getElementById("quote-box").innerHTML = pToHtml;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);