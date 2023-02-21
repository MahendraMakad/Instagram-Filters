const fileInput = document.getElementById('inputTag');
var imagePreview = document.getElementById('input-image');
const downloadButton = document.getElementById('download-button');

//changes to the file input
fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    imagePreview.src = reader.result;
    imagePreview.style.width = "350px";
    imagePreview.style.height = "300px";
  };

  reader.readAsDataURL(file);
  $('#slider-icon').css("display","none");
  $('#image-process-text').css("display","none");
});

downloadButton.addEventListener('click', function() {
  console.log("download start");
  // Create a canvas element with the same dimensions as the image
  imagePreview = document.getElementById('input-image');
  console.log("start");
  imagePreview.onload = function() {
    console.log("Image is loaded");
    const canvas = document.createElement('canvas');
    canvas.width = imagePreview.width;
    canvas.height = imagePreview.height;
  
    // Get the canvas context and draw the image
    const context = canvas.getContext('2d');
    context.drawImage(imagePreview, 0, 0);
  
    // Convert the canvas to a data URL and set it as the href of a link element
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL('image/png');
  
    // Click the link to download the image
    link.click();
  };
});

function changeFilter(classname) {
  classname = classname.split(" ");
  element = document.getElementById("input-image");
  element.setAttribute("class", "container" + " " + classname[0]);
}



// function to reset image
function resetImage() {
  let image1 = document.getElementById("input-image");
  image1.style.display = "none";
  document.getElementById("slider-icon").style.display = "block";
  document.getElementById("image-process-text").style.display = "block";
  $('#button-reset').prop('disabled', true);
  $('#button-download').prop('disabled', true);
  return;
}

