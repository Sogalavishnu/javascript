// The Examples to add the elements and change the html elements using the javascript.

// Example 1 <h1>

// STEP 1 CREATING AN ELEMENT

const newH1 = document.createElement("h1");

// STEP 2 ADDING ATTRIBUTES/PROPERTIES TO THE ELEMENT

newH1.textContent = "I like Fruits";
newH1.id = "MYH1";
newH1.className = "heading";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// the ordered list elements adding.

const newListelement = document.createElement("li");
newListelement.textContent = "Coconut";
newListelement.style.backgroundColor = "lightgreen";
newListelement.style.fontWeight = "bold";

// STEP 3 APPENDING THE ELEMENT TO THE DOM

// adding the ol list element to the ol.
document.getElementById("Fruits").prepend(newListelement);

// document.body.append(newH1); // Adding treats as the last element of the body.
document.body.prepend(newH1); // adds at the beginning of the body.
document.getElementById("Box1").append(newH1);
//  we can add the element to the specific element by using the append model.
// inserting b/w the elements box2 and box3.

// const box2 = document.getElementById("Box3");
// document.body.insertBefore(newH1, box2); 

// If they don't have a id them accessing them by the class name.

// const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);

// STEP 4 REMOVE THE HTML ELEMENT.

document.getElementById("Box1").removeChild(newH1); // removed the element of box1 by removeChild method.


