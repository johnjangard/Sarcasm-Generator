function generateText() {

  let element = document.getElementById('result');

  if (element !== null) {
     element.innerHTML = null;
  };
////
  let textInput = document.getElementById('textinput').value;

  if(textInput == '')
  {
      alert("You have to write something to make it look sarcastic!");
      return;
  };

  let inputArray = Array.from(textInput);
  let outputArray = [];
//////

inputArray.forEach(function(letter, index) {
   if (index % 2 === 0) {
    outputArray.push(letter.toLowerCase());
   } else {
    outputArray.push(letter.toUpperCase());
   }
});
  let results = outputArray.join('');
console.log(results)

let domResult = document.getElementById('result');


let resultHeader = document.createElement("h4");
resultHeader.innerHTML = "Result";
resultHeader.setAttribute('class', ' mt-4 text-decoration-underline');
domResult.appendChild(resultHeader);


let displayString = document.createElement("h1");
displayString.innerHTML = results;
// displayString.setAttribute('class', 'h1');
domResult.appendChild(displayString);


let createBtn = document.createElement("button");
createBtn.innerHTML = 'Copy to clipboard';
createBtn.setAttribute('id', 'btnCopy');
createBtn.setAttribute('class', 'btn btn-primary');
createBtn.onclick = function()
{
  let tempInput = document.createElement("input");
  tempInput.type = "text";

  tempInput.value = results;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("Copy");
  document.body.removeChild(tempInput);


let confirmCopy = document.createElement("p");
confirmCopy.innerHTML = 'Text copied!';
confirmCopy.setAttribute('class', 'btn btn-success');
  domResult.appendChild(confirmCopy);
createBtn.remove();

  console.log('Copied to clipboard!');
}
domResult.appendChild(createBtn);
 
}
