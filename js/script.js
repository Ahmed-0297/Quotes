var quote = document.getElementById('quote');
var quotes = [`“Be yourself; everyone else is already taken.” 
    ― Oscar Wilde`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`]
 
function randQoute(){
    var i = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[i];
}