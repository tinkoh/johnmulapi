// jQuery is for suckers
const getEle = id => document.getElementById(id)

// Retrieves quote
const quote = getEle('quote')

const getQuote = async () =>
    fetch('https://api.johnmulapi.com')
    .then(res => res.json())
    .then(data => quote.innerHTML = data.quote)

getQuote() // Start page load with quote

// Get new quote on refresh interaction
getEle('refresh').addEventListener('click', () => getQuote())

// Opens/closes FAQ window on FAQ interaction
const faqDiv = getEle('faq-div')
let faqStatus = false

getEle('faq').addEventListener('click', () => {
    if (!faqStatus) {
        faqDiv.style.display = 'block'
        faqStatus = true
    } else {
        faqDiv.style.display = 'none'
        faqStatus = false
    }
});

let codeArray = document.getElementsByClassName('code-button')
for (i=0; i<codeArray.length; i++) {

    let id = codeArray[i].id
    let idEle = getEle(id)
    idEle.addEventListener('click', () => {

        idEle.style.color = '#0078D7'
        let elements = Object.values(document.getElementsByTagName('pre'))
  
        for (i=0; i<codeArray.length; i++) {
            if (codeArray[i].id !== id) {
                getEle(codeArray[i].id).style.color = 'black'
                elements[i].style.display = 'none'
            } else {
                elements[i].style.display = 'block'
            }
        }
    })
}