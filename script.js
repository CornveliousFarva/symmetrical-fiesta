// ID calls
const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet")

// Function to get a new quote
const getNewQuote = async () => {
    // API for quotes
    var url="https://type.fit/api/quotes";

    // Fetch the data from the API
    const response = await fetch(url);
    console.log(typeof response);

    // Convert response to JSON and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const index = Math.floor(Math.random() * allQuotes.length);

    
}

getNewQuote();