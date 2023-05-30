document.getElementById('demo').style.borderColor = "green"
// document.getElementsByClassName('demo').borderColor = "blue"
let blue = document.querySelectorAll('.demo');

// // blue.style.borderColor="blue"
// console.log(blue)
blue[1].innerHTML = "Second Elements of Class"
blue[1].style.borderColor ="blue"
blue[0].style.borderColor ="blue"
// blue.border = "blue"


// console.log(blue)

// document.querySelectorAll('#demo').style.borderColor = "green"