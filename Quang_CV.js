//Get the button:
mybutton = document.getElementById("toTopButton");
var scrollBtn = document.getElementById("downSection");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    scrollBtn.style.visibility = "hidden";
  } else {
    mybutton.style.display = "none";
    scrollBtn.style.visibility = "visible";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo(0, 0);
  var scrollBtn = document.getElementById("downSection");
  scrollBtn.style.visibility = "visible";
}

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Get the displayed text to hide
  var disText = document.getElementById("disText");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  disText.style.display = "none";
}
function closeFunc(btn) {
	var disText = document.getElementById("disText");
	disText.style.display = "block";
	btn.parentElement.style.display='none';
}

function scrollFunc(btn) {
	var scrollBtn = document.getElementById("downSection");
	window.scrollTo(0, 900);
	scrollBtn.style.visibility = "hidden";
}