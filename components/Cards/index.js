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

function cards(data){
    const container = document.createElement('div')
    container.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = data.headline

    const authorContainer = document.createElement('div')
    authorContainer.classList.add('author')

    container.appendChild(headline, authorContainer)

    const authorImageContainer = document.createElement('div')
    authorImageContainer.classList.add('img-container')

    const authorImage = document.createElement('img')
    authorImage.src = data.authorPhoto
    
    authorImageContainer.appendChild(authorImage)

    const authorName = document.createElement('span')
    authorName.textContent = data.authorName

    authorContainer.appendChild(authorImageContainer, authorName)

    return container

}

const cardsContainer = document.querySelector('.cards-container')

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.javascript.forEach(data => {
        cardsContainer.append(cards(data));
    })
    response.data.articles.bootstrap.forEach(data => {
        cardsContainer.append(cards(data));
    })
    response.data.articles.jquery.forEach(data => {
        cardsContainer.append(cards(data));
    })
    response.data.articles.node.forEach(data => {
        cardsContainer.append(cards(data));
    })
    response.data.articles.technology.forEach(data => {
        cardsContainer.append(cards(data));
    })
});
//     .catch((error) => {
//         console.log("Error:", error);
//       });
//   });