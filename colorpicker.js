let numSquare = 6;
let colors = generateRandomColors(numSquare);
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let messageDisplay = document.getElementById('message');
let pickedColor = pickColor();
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');

let modeButtons = document.querySelectorAll('.mode');
for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(event) {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        modeButtons[i].classList.add('selected');
        this.textContent === 'Easy Mode' ? numSquare = 3 : numSquare = 6;
        reset();
    });
}


function reset() {
    colors = generateRandomColors(numSquare);
    // pick new random colors from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // loop through square and change color
    messageDisplay.textContent = '';
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }

    }
    h1.style.backgroundColor = 'steelblue';
    resetBtn.textContent = 'New Colors';

}

resetBtn.addEventListener('click', function() {
    reset();
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function(event) {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to picked
        // console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'correct';
            changeColors(clickedColor);
            resetBtn.textContent = 'Play Again?'
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.innerText = 'Try Again'
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = []
        // repeat num times
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
        // get random color and push into array
    }
    // return the array
    return arr;
}

function randomColor() {
    //  pick a 'red' from 0-255
    let red = Math.floor(Math.random() * 256);
    // pick a 'green from 0- 255'
    let green = Math.floor(Math.random() * 256);
    // pick a 'blue from 0 -255
    let blue = Math.floor(Math.random() * 256);
    // return 'rgb(' + red + ',' + green + ',' + blue + ')';
    return `rgb(${red}, ${green}, ${blue})`
}