// set initial count
let count = 0;

const buttons = document.querySelectorAll('.btn');
const val = document.getElementById('value');

buttons.forEach(function(element) {
    element.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            val.style.color = 'red';
        }
        if (count > 0) {
            val.style.color = 'green';
        }
        if (count == 0) {
            val.style.color = '';
        }
        val.textContent = count;
    });
});