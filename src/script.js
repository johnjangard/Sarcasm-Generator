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

let rezzy = document.getElementById('result');


let resultHeader = document.createElement("h4");
resultHeader.innerHTML = "Result";
resultHeader.setAttribute('class', ' mt-4 text-decoration-underline');
rezzy.appendChild(resultHeader);


let displayString = document.createElement("h1");
displayString.innerHTML = results;
// displayString.setAttribute('class', 'h1');
rezzy.appendChild(displayString);


let createBtn = document.createElement("button");
createBtn.innerHTML = 'Copy to clipboard';
createBtn.setAttribute('id', 'btnCopy');
createBtn.setAttribute('class', 'btn btn-primary');
createBtn.onclick = function()
{
  // let domValue = results;
  let tempInput = document.createElement("input");
  tempInput.type = "text";
  // tempInput.value = domValue;
  tempInput.value = results;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("Copy");
  document.body.removeChild(tempInput);


let confirmCopy = document.createElement("p");
confirmCopy.innerHTML = 'Text copied!';
confirmCopy.setAttribute('class', 'btn btn-success');
  rezzy.appendChild(confirmCopy);
createBtn.remove();

  console.log('Copied to clipboard!');
}
rezzy.appendChild(createBtn);
 
}
