let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
        handleInput(key);
    } else if (key === 'Enter') {
        // Simulate clicking the equal button
        handleInput('=');
    } else if (/[a-zA-Z]/.test(key)) {
        // Show popup for alphabets
        alert("Only numbers are allowed");
    } else if (key === 'Backspace') {
        // Handle backspace key
        expression = expression.slice(0, -1);
        input.value = expression;
    }
});

function handleInput(value) {
    if (value === '=') {
        try {
            const result = eval(expression);
            input.value = result;
            expression = result.toString();
        } catch (error) {
            input.value = 'Error';
            expression = '';
        }
    } else if (value === 'AC') {
        expression = '';
        input.value = '';
    } else {
        // Check if adding the number would exceed the input box width
        const tempExpression = expression + value;
        input.value = tempExpression;
        const exceedsLimit = input.scrollWidth > input.clientWidth;
        if (exceedsLimit) {
            alert("Value exceeds the limit");
            return;
        }
        expression += value;
    }
}
