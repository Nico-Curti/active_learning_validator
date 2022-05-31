var now = new Date(); // current date time
const MISSING_VALUE = "NaN"
const VALID_ID = "yes"
const INVALID_ID = "no"
const OUTNAME = "responses_" + now.toLocaleDateString() + ".csv"
const LANGUAGE = "eng"

const links = []
let slideIndex = 0;

var responses = {};


/********* Set text Button ******************/

document.getElementById('title').innerHTML = translations[LANGUAGE]["title"];
document.getElementById('loader').innerHTML = translations[LANGUAGE]["loader_btn"];
document.getElementById('button_no').innerHTML = translations[LANGUAGE]["invalid_btn"];
document.getElementById('button_yes').innerHTML = translations[LANGUAGE]["valid_btn"];
document.getElementById('button_upload').innerHTML = translations[LANGUAGE]["download_btn"];
document.getElementById('tooltip_text').innerHTML = translations[LANGUAGE]["help_msg"];

/********* Callback functions ***************/

// Upload directory button
document.getElementById("filepicker").addEventListener("change", function(event) {

  // get the list of files
  let files = event.target.files;

  // append it to the global LINKS array
  for (let i=0; i<files.length; i++) {
    links.push(files[i].webkitRelativePath);
  };

  // hide the uploader button
  document.getElementById("initial").style.display = "none";

  // Dynamic create the image list of files
  for (link of links) {
    document.getElementById('list').innerHTML += `
    <img src="${link}" id="${link}" title="${link}" style="width:100px; height: 100px" onclick=Enlarge(this); />
    `;
  }

  // show the first slide
  showSlides(slideIndex);

}, false);


// KeyBoard shortcuts
document.addEventListener('keydown', (event) => {

  switch(event.code) {

    // If left arrow is pressed
    case "ArrowLeft":
      plusSlides(-1);
      break;

    // If right arrow is pressed
    case "ArrowRight":
      plusSlides(+1);
      break;

    case "KeyS":
      document.getElementById('button_yes').click();
      break;

    case "KeyN":
      document.getElementById('button_no').click();
      break;

    case "Enter":
      document.getElementById('button_upload').click();
      break
  }

}, false);


// Callback for INVALID button
document.getElementById('button_no').addEventListener('click', (event) => {
  // Get the image name
  var current = document.getElementById('expandedImg');
  var filename = current.name;

  // highlight border
  current.style.borderColor = "red";

  // Update the global dictionary
  responses[filename] = INVALID_ID;

  // Print message box
  SnackBar(translations[LANGUAGE]['snack_no']);

}, false)


// Callback for VALID button
document.getElementById('button_yes').addEventListener('click', (event) => {
  // Get the image name
  var current = document.getElementById('expandedImg');
  var filename = current.name;

  // highlight border
  current.style.borderColor = "lime";

  // Update the global dictionary
  responses[filename] = VALID_ID;

  // Print message box
  SnackBar(translations[LANGUAGE]['snack_yes']);

}, false)


// Callback for UPLOAD button
document.getElementById('button_upload').addEventListener('click', (event) => {

  // Create a temporary object for the download trigger
  var hiddenElement = document.createElement('a');
  hiddenElement.download = OUTNAME;

  // start with the header file
  var textToSave = 'Filename,response\n';

  // Loop along the available files
  // NOTE: in this way we can take care of the full list of
  // available files and not just the seen by user
  for (key of links) {

    // get the associated response
    var value = responses[key];

    // If it was inserted
    if (value != undefined) {
      // create the file row with info to dump
      textToSave += basename(key) + ',' + value + '\n';
    }
    // If it was NOT inserted
    else {
      // insert missing values
      textToSave += basename(key) + ',' + MISSING_VALUE + '\n';
    }
  }

  // append the file content
  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  // trigger a click
  hiddenElement.click();


  // Print message box
  SnackBar(translations[LANGUAGE]['snack_download']);

}, false)



/********* Functions ***************/


// Trigger the loader event
function FileLoader() {
  document.getElementById('filepicker').click();
}


// Show the slide according to list index
function showSlides(n) {

  // Force the wrap around
  if (n > links.length - 1) {slideIndex = 0}
  if (n < 0) {slideIndex = links.length - 1}

  // Get the element
  let slides = document.getElementById(links[slideIndex]);
  // Pass to the enlarge viewer
  Enlarge(slides);
}


// Expand the given image in the viewer box
function Enlarge(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Set the name as id to use in the next save
  expandImg.name = imgs.id;
  // Set the title name
  expandImg.title = imgs.title;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";

  if (responses[expandImg.name] == INVALID_ID) {
    // highlight border
    expandImg.style.borderColor = "red";
  } else if (responses[expandImg.name] == VALID_ID) {
    // highlight border
    expandImg.style.borderColor = "lime";
  } else {
    expandImg.style.borderColor = "#555";
  }
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Get file basename
function basename(path) {
  return path.split('/').reverse()[0];
}


// SnackBar helper
function SnackBar(msg) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  x.innerHTML = msg;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}
