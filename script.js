const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
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

// Get Quote From API
async function getQuote() {
  loading();
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v2/randomquotes",
    headers: { "X-Api-Key": "0nY9KBu5ih1VkTxSKobiAWW3fOQl9wjJosLOxZAX" },
    contentType: "application/json",
    data: { categories: "success,wisdom,inspirational" },
    success: function (result) {
      console.log(result);

      // Display the quote to UI
      authorText.innerHTML = result[0].author;
      quoteText.innerHTML = result[0].quote;
      complete();
    },

    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

// To load
getQuote();

// Post Quote
function twitterQuote() {
  const quote = quoteText.innerHTML;
  const author = authorText.innerHTML;
  const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`;
  window.open(twitterUrl, "_blank");
}

// Event Listener
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", twitterQuote);
