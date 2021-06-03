// jQuery is for suckers
function getEle(id) {
    return document.getElementById(id);
}

let quote = getEle('quote');
function getQuote() {
    fetch('https://johnmulapi.herokuapp.com')
    .then(res => res.json())
    .then(data => quote.innerHTML = data.quote);
}

getQuote(); // Start page load with quote

// Get new quote on refresh interaction
getEle('refresh').addEventListener('click', () => getQuote())

// I should combine this to one DOM query
let showTerminal = true;
getEle('terminal').addEventListener('click', (e) => {
    if (!showTerminal) {
        getEle('code').innerHTML = 
        '$ curl johnmulapi.herokuapp.com';
        showTerminal = true;
        getEle('terminal').style.color = 'blue';
        getEle('javascript').style.color = 'black';
    }
});
getEle('javascript').addEventListener('click', (e) => {
    if (showTerminal) {
        getEle('code').innerHTML = 
        `fetch('https://johnmulapi.herokuapp.com')<br/>
        &nbsp;&nbsp;&nbsp;.then(res => res.json())<br/>
        &nbsp;&nbsp;&nbsp;.then(data => console.log(data);`;
        showTerminal = false;
        getEle('javascript').style.color = 'blue';
        getEle('terminal').style.color = 'black';
    }
});

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
    } if (rnd >= reasons.length) {
        rnd = 0;
    }
    console.log(rnd);
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
        faqDiv.style.height = '350px';
        faqStatus = true;
    } else {
        faqDiv.style.height = '0px';
        faqStatus = false;
    }
});
