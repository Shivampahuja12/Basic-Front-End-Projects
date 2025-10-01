// select the counter display
const counter = document.querySelector('#counter')

// select all the buttons
const buttons = document.querySelectorAll('button')

// initialize the counter value
let count = 0

// loop through each button
buttons.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        if (btn.textContent.includes('Inc')){
            count++;
        }
        else if (btn.textContent.includes("Dec")){
            count--;
        }
        else {
            count = 0;
        }
        
        // update display
        counter.textContent = count;
    })
})
buttons.forEach((btn) => {
    btn.addEventListener('mouseup', ()=>{
        if (btn.textContent.includes('Inc')){
            btn.removeAttribute('style')
        }
        else if (btn.textContent.includes("Dec")){
            btn.removeAttribute('style')
            
        }
        else {
            btn.removeAttribute('style')

        }
        
        // update display
        // counter.textContent = count;
    })
})
buttons.forEach((btn) => {
    btn.addEventListener('mousedown', ()=>{
        if (btn.textContent.includes('Inc')){
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            btn.style.border = "2px solid black"
            // count++;
        }
        else if (btn.textContent.includes("Dec")){
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            btn.style.border = "2px solid black"
            // count--;
        }
        else {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            btn.style.border = "2px solid black"
            // count = 0;
        }
        
        // update display
        // counter.textContent = count;
    })
})


