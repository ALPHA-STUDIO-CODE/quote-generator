const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading spinner
function loading() {
  loader.style.display = "flex";
  quoteContainer.style.display = "none";
}

// Hide loading spinner
function complete() {
  loader.style.display = "none";
  quoteContainer.style.display = "block";
}

// Gets Quote from local storage
function getQuote() {
  loading();
  // Quote from a local storage
  const localQuote =
    localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(localQuote);

  //  Check is author fild is blank
  if (!localQuote.author) {
    authorText.innerHTML = "Unknown";
  } else {
    authorText.innerHTML = localQuote.author;
  }

  // Display quote to UI
  quoteText.innerHTML = localQuote.text;
  complete();
}

// TODO: to get API key
// Get Quote From API
// async function getQuote() {
//   const apiUrl =
//     "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";
//   try {
//     const response = await fetch(apiUrl);
//     const apiQuotes = await response.json();
//     console.log(apiQuotes);
//   } catch (error) {
//     // Catch the error
//     console.error("Error fetching quote:", error);
//   }
// }

//TODO:
// function tweetQuote() {
//   const twitterUrl = `https://x.com/intent/tweet=${quoteText.innerHTML} - ${authorText.innerHTML}`;
//   window.open(twitterUrl, "_blank");
// }

//

// newQuoteBtn.addEventListener("click", getQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// To load
getQuote();
