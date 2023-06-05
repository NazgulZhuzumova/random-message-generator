let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = ['"Sieze the day"', '"Success is No Accident"',
    '"Better later than never"', '"Love is important", "do not settle for average"', '"Happiness is like jam", "Everybody is genius"', '"Opportunities do not happen, you create them"', '"Life is abundant, and life is beautiful"', '"it is never too late to be what you might have been".'];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})