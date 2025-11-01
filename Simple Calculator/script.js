let string = ""

const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.btn')


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            display.textContent = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = "";
            display.textContent = string
        }
        else {
            // console.log(e.target)
            string = string + e.target.innerHTML;
            display.textContent = string
        }
    })
})