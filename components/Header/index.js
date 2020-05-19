// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div'),
        span = document.createElement('span'),
        title = document.createElement('h1'),
        span2 = document.createElement('span');

    header.appendChild (span)
    header.appendChild(title)
    header.appendChild(span2)

    span.textContent = 'MARCH 28, 2019'
    title.textContent = 'Lambda Times'
    span2.textContent = '98°'

    header.className = 'header'
    span.className = 'date'
    span2.className = 'temp'

    return header
}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())
