let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onClick = function() {
    setUserName();
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Coding is Cool, ' + storedName;
      }
    }