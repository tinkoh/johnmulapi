// jQuery is for suckers
function getEle(id) {
    return document.getElementById(id);
}

let quote = getEle('quote');
function getQuote() {
    fetch('https://api.johnmulapi.com')
    .then(res => res.json())
    .then(data => {quote.innerHTML = data.quote; console.log(data.quote)});
}

getQuote(); // Start page load with quote

// Get new quote on refresh interaction
getEle('refresh').addEventListener('click', () => getQuote())

let codeBlocks = {
    'terminal' : '$ curl api.johnmulapi.com',
    'javascript' : `fetch('https://api.johnmulapi.com')<br/>
                    &nbsp;&nbsp;&nbsp;.then(res => res.json())<br/>
                    &nbsp;&nbsp;&nbsp;.then(data => console.log(data.quote);`,
    'python' : `import requests<br>
        &nbsp;&nbsp;quote = (requests<br>
        &nbsp;&nbsp;.get('https://api.johnmulapi.com')<br>
        &nbsp;&nbsp;.json())<br>
        &nbsp;&nbsp;print(quote['quote'])`
}
let codeArray = document.getElementsByClassName('code-button')
    for (i=0; i<codeArray.length; i++) {
        let id = codeArray[i].id;
        let idEle = getEle(id)
        idEle.addEventListener('click', () => {
            idEle.style.color = 'blue';
            for (i=0; i<codeArray.length; i++) {
                if (codeArray[i].id !== id) {
                    getEle(codeArray[i].id).style.color = 'black';
                }
            }
            getEle('code').innerHTML = codeBlocks[id];
        })
    }

// Start page with a random reason for FAQ page
const reasons = [
    'To make the world a better place.',
    'They asked Edison the same thing.',
    "If you have to ask, you'll never know.",
    "Great innovation doesn't need a reason.",
    'Would you ask Steve Jobs that?'
]
let currentReason = ''; // Ensures a different reason is loaded each time
function getReason() {
    let rnd = Math.floor(Math.random() * reasons.length)
    if (reasons[rnd] === currentReason) {
        if (rnd >= reasons.length) {
            rnd = 0;
        } else {
            rnd = rnd + 1;
        }
    } 
    if (rnd >= reasons.length) {
        rnd = 0;
    }
    let newReason = reasons[rnd];
    getEle('reason').innerHTML = newReason;
    currentReason = newReason;
}
// Opens/closes FAQ window on faq interaction
faqStatus = false;
getEle('faq').addEventListener('click', () => {
    let faqDiv = getEle('faq-div');
    if (!faqStatus) {
        getReason();
        faqDiv.style.height = '470px';
        faqStatus = true;
    } else {
        faqDiv.style.height = '0px';
        faqStatus = false;
    }
});

