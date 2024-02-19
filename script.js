// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".

// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop

// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
document.getElementById('container').style.backgroundColor = 'blue';
document.querySelector('#header').innerHTML = 'These are the DOM methods';

var elements = document.getElementsByClassName('dom-methods');

for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'red';
}

var element = document.querySelectorAll('.dom-methods');

for (let i = 0; i < element; i++) {
  element[i].style.fontsize = '20px';
}

// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.

// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.

// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.

var newDiv = document.createElement('div');
newDiv.textContent = 'Division';
document.body.appendChild(newDiv);

newDiv.setAttribute('id', 'main');
var Idvalue = newDiv.getAttribute('id');
console.log(Idvalue);

document.getElementById('main').innerHTML = 'This is a division';

var newP = document.createElement('p');
newDiv.appendChild(newP);
newP.innerHTML = 'This is a paragraph tag';

var footerElement = document.getElementsByClassName('footer')[0];
footerElement.classList.remove('footer');
footerElement.classList.add('dom-method-footer');

newP.style.color = 'red';

document.getElementsByTagName('div')[0].removeAttribute('class');
