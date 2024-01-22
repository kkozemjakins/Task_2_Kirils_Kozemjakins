function HamburgerMenu() {
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// Get the current URL path
var path = window.location.pathname;

// Extract the page name from the URL
var page = path.split("/").pop();

// Remove the file extension (e.g., ".html")
page = page.split(".")[0];

// Highlight the corresponding link in the navbar
var link = document.getElementById(page);
if (link) {
    link.classList.add("active");
}

//submit button text
document.addEventListener('DOMContentLoaded', function () {
  // Get the form and submit button
  var form = document.querySelector('.containre_contact_form form');
  var submitButton = document.querySelector('.submit_row input[type="submit"]');
  
  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Hide the submit button
      submitButton.classList.add('hidden');
      
      // Create and append the <p> element after the form
      var thankYouMessage = document.createElement('p');
      var Message = document.createElement('p');
      thankYouMessage.textContent = 'Paldies, ka sapņo!';
      Message.textContent = 'Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.';
      form.insertAdjacentElement('afterend', Message,);
      form.insertAdjacentElement('afterend', thankYouMessage,);
  });
});


//story slider

document.addEventListener("DOMContentLoaded", function () {

  const sliderBody = document.querySelector(".slider_body");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");

  // Set initial slide index
  let currentSlideIndex = 0;

  const slides = [
      { name: "Ken Ludden", title: "Director, Margot Fonteyn Academy of Ballet", story: "For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure." },
      { name: "Slide 2", title: "Title 2", story: "Story 2" },
      { name: "Slide 3", title: "Title 3", story: "Story 3" }
  ];

  // Function to update the slider content
  function updateSlider() {
      const currentSlide = slides[currentSlideIndex];
      sliderBody.innerHTML = `
          <p id="name">${currentSlide.name}</p>
          <p id="title">${currentSlide.title}</p>
          <p id="story">${currentSlide.story}</p>
      `;
  }

  // Function to handle the left button click
  function handleLeftButtonClick() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlider();
  }

  // Function to handle the right button click
  function handleRightButtonClick() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlider();
  }

  // Add click event listeners to the buttons
  leftButton.addEventListener("click", handleLeftButtonClick);
  rightButton.addEventListener("click", handleRightButtonClick);

  // Initial update to show the first slide
  updateSlider();
});




var dream_photos = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17];     

function createDreams() {
  // Reference to the container element
  var container = document.querySelector('.container_99dreams');

  // Loop to create 17 rows
  for (var i = 1; i <= 17; i++) {
      // Create a new row element
      var row = document.createElement("div");
      row.className = "row_99dreams";
      
      // Set a unique ID for each row
      row.id = "row_" + i;

      // Check if it is the last row
      if (i === 17) {
          // Add a different class name to the last row
          row.className = "last_row_99dreams";
      }

      // Loop to create 6 .dream_photo in each row, except the last row
      var numPhotos = (i < 17) ? 6 : 3;
      for (var j = 1; j <= numPhotos; j++) {
          // Create a new .dream_photo element
          var dreamPhoto = document.createElement("div");
          dreamPhoto.className = "dream_photo";

          // Assign individual ID to each .dream_photo
          dreamPhoto.id = "dream_photo_" + ((i - 1) * 6 + j);

          // Create img elements
          var bgImg = document.createElement("img");
          bgImg.className = "bg";

          /*
          var mainImg = document.createElement("img");
          mainImg.className = "main-photo";
          mainImg.src = "assets/img/pictures/99dream/" + ((i - 1) * 6 + j) + ".jpg";
          mainImg.alt = "photo";*/

          

          // Check if the background image for this div should be changed
          if (dream_photos.includes((i - 1) * 6 + j)) {
              bgImg.src = "assets/img/pictures/dream-bg-tr.png"; // Background image if it exists
          } else {
              bgImg.src = "assets/img/pictures/dream-bg.png"; // Default background image
          }

          // Append img elements to .dream_photo 
          dreamPhoto.appendChild(bgImg);
          //dreamPhoto.appendChild(mainImg);

          // Create p elements
          var numberP = document.createElement("p");
          numberP.className = "number";
          numberP.textContent = ((i - 1) * 6 + j);

          var titleP = document.createElement("p");
          titleP.className = "title";

          // Append p elements to .dream_photo
          dreamPhoto.appendChild(numberP);
          dreamPhoto.appendChild(titleP);

          // Append .dream_photo to .row_99dreams
          row.appendChild(dreamPhoto);
      }

      // Append .row_99dreams to .container_99dreams
      container.appendChild(row);
  }
}

function SetBackgrounds(){
  for (let i = 1; i < 100; i++) {
    var dream_photo = document.getElementById('dream_photo_'+i);
    dream_photo.style.backgroundImage = "url('assets/img/pictures/99dream/"+ i +".jpg')";

    if (dream_photos[i-1] == i) {
      
      console.log(i,dream_photos[i-1])
    }


  }
}

createDreams();

SetBackgrounds()

/*
                    
                    <div class="row_99dreams">
                        <div class="dream_photo">
                            
                            <p class="title"></p>
                            <p class="number">1</p>


                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>
                        <div class="dream_photo">
                            
                            <p class="title"></p>
                            <p class="number">2</p>


                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>
                        <div class="dream_photo">
                            
                            <p class="title"></p>
                            <p class="number">3</p>



                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>
                        <div class="dream_photo">
                            

                            <p class="number">4</p>
                            <p class="title"></p>

                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>
                        <div class="dream_photo">
                            

                            <p class="number">5</p>
                            <p class="title"></p>

                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>
                        <div class="dream_photo">
                            

                            <p class="number">6</p>
                            <p class="title"></p>

                            <img class="bg" src="assets/img/pictures/dream-bg-tr.png" alt="gold_cover">

                        </div>


                    </div>*/






/*
document.addEventListener("DOMContentLoaded", function () {
  const lightboxes = document.querySelectorAll('.dream_photo');

  lightboxes.forEach((lightbox) => {
      lightbox.addEventListener('click', () => {
          lightbox.querySelector('.lightbox').style.display = 'flex';
      });

      lightbox.querySelector('.lightbox').addEventListener('click', () => {
          lightbox.querySelector('.lightbox').style.display = 'none';
      });
  });
});*/

var dreamImages = document.querySelectorAll('.dream_photo img');
var lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

dreamImages.forEach(function(img, index) {
  img.addEventListener('click', function() {
    openLightbox(index + 1);
  });
});

// Add event listeners for divs with matching IDs
dreamImages.forEach(function(_, index) {
  var divId = "dream_photo_" + (index + 1);
  var div = document.getElementById(divId);
  if (div) {
    div.addEventListener('click', function() {
      openLightbox(index + 1);
    });
  }
});

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

function openLightbox(index) {
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="close-btn" onclick="closeLightbox()">&times;</span>
      <img src="assets/img/pictures/99dream/99dreamFull/` + index +`.jpg" alt="gold_cover" class="lightbox-img">
    </div>
  `;
  lightbox.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
}
