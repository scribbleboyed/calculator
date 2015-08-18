var numberButtons = document.querySelectorAll('.num');
var actionButtons = document.querySelectorAll('.action');
var modifierButtons = document.querySelectorAll('.modifier');
var deleteButton = document.querySelector('#delete');
var equalButton = document.querySelector('#equal');
var clearButton = document.querySelector('#clear');
var textBox = document.querySelector('#text');

var numberString1 = "";
var numberString2 = "";
var action = "";

var numberStored = false;

// number buttons
for (var x=0; x < numberButtons.length; x++) {
      numberButtons[x].addEventListener('click', function() {
            console.log(this.id);
            if (!numberStored) {
                  numberString1 += this.id;
                  textBox.innerHTML = numberString1;
            } else {
                  numberString2 += this.id;
                  textBox.innerHTML = numberString2;
            }     
      });
}

// action buttons
for (var x=0; x < actionButtons.length; x++) {
            actionButtons[x].addEventListener('click', function() {
                  if (numberString1 != "") {
                        console.log(this.id);
                        action = this.id;
                        numberStored = true;
                  } else {
                        textBox.innerHTML = "Enter Num";
                  }
            });
}

// modifier buttons
for (var x=0; x < modifierButtons.length; x++) {
            modifierButtons[x].addEventListener('click', function() {
                  if (numberString1 != "") {
                        var num1 = Number(numberString1);
                        console.log(this.id);
                        action = this.id;
                        var result = eval(action)(num1).toString();
                        numberString1 = result;
                        textBox.innerHTML = result;
                  } else {
                        textBox.innerHTML = "Enter Num";
                  }
            });
}

// delete button
deleteButton.addEventListener('click', function() {
      console.log(this.id);
      if (!numberStored) {
            numberString1 = numberString1.substring(0, numberString1.length-1);
            textBox.innerHTML = numberString1;
      }
      else {
            numberString2 = numberString2.substring(0, numberString2.length-1);
            textBox.innerHTML = numberString1;
      }
})

// equal button
equalButton.addEventListener('click', function() {
      console.log(this.id);
      var num1 = Number(numberString1);
      var num2 = Number(numberString2);
      var result = eval(action)(num1,num2).toString();
      if (result.length > 10) result = result.substring(0,11);

      textBox.innerHTML = result;
      numberString1 = result;
      numberString2 = "";
})

// clear button
clearButton.addEventListener('click', function() {
      console.log(this.id);
      numberStored = false;
      numberString1 = "";
      numberString2 = "";
      action = "";
      textBox.innerHTML = "";
})

// update

function add (a,b) { return a + b };
function subtract (a,b) { return a - b };
function multiply (a,b) { return a * b };
function divide (a,b) { return a / b };
function square (a) { return a * a };
function root (a) { return Math.sqrt(a) };
function exp (a,b) { return Math.pow(a,b) };
function sin (a) { return Math.sin(a) };
function cos (a) { return Math.cos(a) };
function tan (a) { return Math.tan(a) };
function abs (a) { if (a < 0) { return a * -1 } else { return a } };
