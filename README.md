# Quote Generator

A dynamic web application that fetches and displays random inspirational quotes with the ability to share them on Twitter/X.

## Features

- **Random Quote Generation**: Fetches random quotes from the API Ninjas API with categories including success, wisdom, and inspirational quotes
- **Loading State**: Displays an animated loading spinner while fetching quotes
- **Tweet Integration**: Share quotes directly to Twitter/X with a single click
- **Responsive Design**: Works seamlessly on both mobile and desktop devices
- **Modern UI**: Clean, centered interface with a dark blue gradient background and smooth animations

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling with animations and responsive media queries
- **JavaScript**: Vanilla JS for DOM manipulation and async operations
- **jQuery**: AJAX requests for API calls
- **Font Awesome**: Icon library for quote icon and Twitter/X icon
- **Google Fonts**: Montserrat font family
- **API Ninjas**: Random quotes API

## Project Structure

```
quote-generator/
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## How It Works

1. **Initial Load**: When the page loads, `getQuote()` is called automatically to display an initial quote
2. **Fetch Quote**: Clicking the "New Quote" button triggers an AJAX request to the API Ninjas random quotes endpoint
3. **Display Quote**: The quote and author are dynamically inserted into the DOM
4. **Share Quote**: Click the Twitter/X button to open a pre-populated tweet with the current quote
5. **Loading State**: A loading spinner is shown while fetching data and hidden once the quote is displayed

## Key Functions

- `getQuote()`: Fetches a random quote from the API Ninjas service
- `loading()`: Shows the loading spinner and hides the quote container
- `complete()`: Hides the loading spinner and displays the quote container
- `twitterQuote()`: Opens a Twitter/X intent URL with the current quote

## API Details

- **Endpoint**: `https://api.api-ninjas.com/v2/randomquotes`
- **Categories**: success, wisdom, inspirational
- **Response**: Returns array of quote objects with `quote` and `author` properties

## Responsive Design

- Mobile-first approach with base styling for all screen sizes
- Desktop optimization at 800px+ breakpoint with increased quote container width (768px)

## Styling Highlights

- Animated loading spinner with staggered bar animations
- Glassmorphism effect on the quote container with semi-transparent background
- Button hover effects and press animations
- Beautiful background pattern with SVG gradient overlay
- Professional color scheme: dark indigo background with white text
