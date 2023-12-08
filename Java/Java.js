// Footer
const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `Copyright © ${currentYear} Your Name`;

// Alert Button
const alertButton = document.getElementById('btn-alert');
alertButton.addEventListener('click', () => {
    alert('Hello world!');
});

// Hover Button
const hoverButton = document.getElementById('btn-hover');
hoverButton.addEventListener('mouseover', () => {
    hoverButton.innerText = 'New button label';
});

hoverButton.addEventListener('mouseleave', () => {
    hoverButton.innerText = 'Default button label';
});

// Incrementing Button
let count = 1;
const incrementButton = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');

incrementButton.addEventListener('click', () => {
    count += 1;
    counterText.innerHTML = `Number: ${count}`;
    
    // if-else for changing text color
    if (count % 2 === 0) {
        counterText.classList.remove('odd');
        counterText.classList.add('even');
    } else {
        counterText.classList.remove('even');
        counterText.classList.add('odd');
    }
});

// for Loops
const numbersList = document.getElementById('numbers');
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
}
