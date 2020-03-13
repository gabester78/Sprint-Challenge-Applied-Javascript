// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     console.log(response);
//   });

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.javascript.forEach(item => {
      document.querySelector(".cards-container").append(story(item));
    });
    response.data.articles.bootstrap.forEach(item => {
      document.querySelector(".cards-container").append(story(item));
    });
    response.data.articles.technology.forEach(item => {
      document.querySelector(".cards-container").append(story(item));
    });
    response.data.articles.jquery.forEach(item => {
      document.querySelector(".cards-container").append(story(item));
    });
    response.data.articles.node.forEach(item => {
      document.querySelector(".cards-container").append(story(item));
    });
  });

function story(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = item.headline;
  card.append(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  card.append(author);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.append(imgContainer);

  const image = document.createElement("img");
  image.src = item.authorPhoto;
  imgContainer.append(image);

  const span = document.createElement("span");
  span.textContent = item.authorName;
  author.append(span);

  return card;
}
