let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button'); 
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            // Evaluate the string and show result
            string = eval(string); 
            input.value = string;  // Display the result
        } else if (value === 'C') {
            // Clear the input (optional)
            string = "";
            input.value = string;
        } else {
            // Append number or operator to the string
            string += value;
            input.value = string;  // Update the input display
        }
    });
});
