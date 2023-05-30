
let btn = document.getElementById('btn');


let c = 0;
let count = document.getElementById('count');

btn.addEventListener('click', () => {
    c++; 
    count.innerText = `The button was clicked ${c} times!`;
})

function clear(){
    c = 0;
    count.innerText = `The button was clicked 0 times!`;
}

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', clear)