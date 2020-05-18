// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let tabNames = [];

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => Tabs(response.data.topics))
    .catch(err => console.log(err.data))

const Tabs = array => {
    const tabsDiv = document.querySelector('.topics')

    array.forEach(e => {
        const div = document.createElement('div')
        div.className = 'tab'
        div.textContent = e
        tabsDiv.appendChild(div)
    })
}