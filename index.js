
  
       const loadElement = document.querySelector("[data-preloader]");

        window.addEventListener("load", function () {
          loadElement.classList.add("loaded");
        });


        let slideIndex = 0;
        showSlides();

        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
          slides[slideIndex-1].style.display = "block";
          setTimeout(showSlides, 2000); 
        }

        const textElement = document.getElementById('text');
        const textArray = [
        "Style",
        "Elegance", 
        "Minimalism", 
        "Comfort"
        ];
        let currentIndex = 0;

        function updateTextSmoothly() {
          const currentText = textElement.innerText;
          const nextText = textArray[currentIndex];

          // Calculate the duration for the transition
          const charDuration = 50; // Milliseconds
          const totalTime = charDuration * Math.max(currentText.length, nextText.length);

          // Function to update text with a smooth transition
          function updateTextWithTransition(charIndex) {
            if (charIndex >= nextText.length) {
              // If transition is complete, update currentIndex for next text
              currentIndex = (currentIndex + 1) % textArray.length;
              setTimeout(updateTextSmoothly, 1000); // Wait for 1 second before transitioning again
              return;
            }

            // Generate the text with transition
            const newText = nextText.slice(0, charIndex + 1);
            textElement.innerText = newText;

            // Call the function recursively for the next character
            setTimeout(() => {
              updateTextWithTransition(charIndex + 1);
            }, charDuration);
          }

          // Start the transition
          updateTextWithTransition(0);
        }

        // Start updating text smoothly
        updateTextSmoothly();

        const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')



