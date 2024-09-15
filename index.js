
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
let screenValue = ''; 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

      
        if (buttonText === 'AC') {
            screenValue = '';
            screen.value = screenValue;
        }
        
        else if (buttonText === '=') {
            try {
                screen.value = eval(screenValue);  
                screenValue = '';  
            } catch {
                screen.value = 'Error';  
                screenValue = '';
            }
        }
      
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
});
