const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", transiteText)

function transiteText(event) {

    const text = event.target.value
    
    if (text.trim().length > 0) {
       output.textContent = text
    } else {
        output.textContent = "Anonymous";
    }
    }
