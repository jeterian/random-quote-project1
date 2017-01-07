// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array of JS objects for the individual quotes and the various pieces of information
var quotes = [
  {
    quote: "What I say is, a town isn’t a town without a bookstore. It may call itself a town, but unless it’s got a bookstore, it knows it’s not foolin’ a soul.",
    source: "Neil Gaiman",
    citation: "American Gods",
    year: 2001,
    tags: "books, reading",
    seen: 0
  },
  {
    quote: "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
    source: "Kurt Vonnegut",
    citation: "Player Piano",
    year: 1952,
    tags: "life, living, courage, unique",
    seen: 0
  },
  {
    quote: "We're a government that believes in everybody having the illusion of free will.",
    source: "Anthony Burgess",
    citation: "The Wanting Seed",
    year: 1952,
    tags: "freedom, government, deception, belief",
    seen: 0
  },
  {
    quote: "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Americanah",
    year: 2013,
    tags: "questions, friendship, empathy, learning, listening",
    seen: 0
  },
  {
    quote: "This was love: a string of coincidences that gathered significance and became miracles.",
    source: "Chimamanda Ngozi Adichie",
    citation: "Half of a Yellow Sun",
    year: 2006,
    tags: "love, coincidence, miracles",
    seen: 0
  },
  {
    quote: "It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.",
    source: "Patrick Rothfuss",
    citation: "The Name of the Wind",
    year: 2007,
    tags: "life, stories",
    seen: 0
  },
  {
    quote: "We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.",
    source: "Margaret Atwood",
    citation: "The Handmaid's Tale",
    year: 1985,
    tags: "life, stories, freedom, invisibility",
    seen: 0
  },
  {
    quote: "People who deny the existence of dragons are often eaten by dragons. From within.",
    source: "Ursula Le Guin",
    citation: "The Wave in the Mind: Talks & Essays on the Writer, the Reader & the Imagination",
    year: 2004,
    tags: "life, imagination, creativity",
    seen: 0
  },
  {
    quote: "The books that the world calls immoral are books that show the world its own shame.",
    source: "Oscar Wilde",
    citation: "The Picture of Dorian Gray",
    year: 1890,
    tags: "books, morality, shame",
    seen: 0
  },
  {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    source: "Alan Turing",
    citation: "Computing machinery and intelligence",
    year: 1950,
    tags: "progress, science, vision",
    seen: 0
  }
];

// function for random number generator for both quotes and backgrounds

function getRandomNum() {
  var randInt = Math.floor(Math.random() * quotes.length);
}

// create function named getRandomQuote() which will select a random quote from the above array

function getRandomQuote() {
  var num = getRandomNum();
  var selectedQuote = quotes[num];
  console.log(selectedQuote);
  return selectedQuote;
}

// print the selected quote to the screen
function printQuote() {
  var randQuo = {};
  randQuo = getRandomQuote ();
  console.log(randQuo);
	var output = '<p class ="quote">' + randQuo.quote  + '</p>' + '<p class ="source">' + randQuo.source + '</p>' +
     '<span class="citation">' + randQuo.citation + '</span>'+ '<span class="year">' + randQuo.year + '</span>' + '<span class="tags">' + randQuo.tags + '</span>';
  document.getElementById('quote-box').innerHTML = output;
}


// Collection of background images to randomly select each time the quote changes

var backgroundImgs = ['img/boatwake.jpg', 'img/littleskellig.jpg', 'img/littleskellig2.jpg',
                      'img/palmtree.jpg', 'portmagee.jpg', 'img/portmagee2.jpg', 'img/skelligmichael.jpg',
                      'img/skelligmichael2.jpg', 'img/skelligmichaelstairs.jpg', 'img/valencia.jpg']

// function to randomly select background image