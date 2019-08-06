const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);

sect.removeChild(linkPara);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

document.querySelector('.click-me')
.addEventListener('click', showAlert);

function showAlert() {
    alert('Button clicked')
}

const clockDisplay = document.querySelector('.clock')
setInterval( 
    () => clockDisplay.innerText = new Date().toLocaleTimeString()), 
    1000
    );

const display = document.querySelector('.calculator .display');

document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}    