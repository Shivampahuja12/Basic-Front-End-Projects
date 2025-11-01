
const submit = document.querySelector('.submit');
const div = document.querySelector('.output')

div.style.fontSize = '20px'

submit.addEventListener('click', function () {

    const num = document.querySelector('.value').value;

    if (num > 20 || num < 0) {
        div.innerText = 'Please enter a valid value'
    }
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        
        div.innerText = `The answer is: ${fact}`
    }

})