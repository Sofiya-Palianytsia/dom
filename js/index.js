const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');

for (let i = 0; i < 5; i++) {
    const para = document.createElement('p');
    para.textContent = i + 'We hope you enjoyed the ride.';
    sect.appendChild(para);
}

var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);
//down
sect.appendChild(linkPara.cloneNode(true));

/*const clock = document.querySelector('.clock');
setInterval ( () => clock.innnerText = new Date ().toLocaleTimeString(),
            1000);*/

/*const clockDisplay = document.querySelector('.clock');
setInterval( () => clockDisplay.innerText = new Date().toLocaleTimeString(),
    1000
    );*/

setInterval( () => $('.clock').html ((new Date()).toLocaleTimeString()),
    1000
    );

//calculator
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( digit => digit.addEventListner('click', digitPressed ));

function digitPressed(ev) {
    ev.preventDefault();
    display.value += ev.target.innerText;
}

/*document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
} */