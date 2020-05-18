// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const data = response.data.articles
        const keys = Object.keys(data)
        keys.forEach(key => data[key].forEach(e => Card(e)))
    })
    .catch(err => console.log(err.data))

const Card = article => {
    const cardsContainer = document.querySelector('.cards-container'),
        card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgDiv = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgDiv.className = 'img-container'

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgDiv)
    author.appendChild(span)
    imgDiv.appendChild(img)

    headline.textContent = article.headline
    img.src = article.authorPhoto
    span.textContent = `By ${article.authorName}`

    cardsContainer.appendChild(card)
}
