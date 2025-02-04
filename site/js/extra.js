//this is fo back to top button

document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//this is for anchorlinks

// document.addEventListener('DOMContentLoaded', function() {
//     const heading = document.getElementById('welcome-to-dks-accounting-software');
//     const revealIcon = document.querySelector('.icon-link'); // Directly target the span by class
  
//     if (revealIcon && heading) { // Check if both elements exist!
//       revealIcon.style.display = 'none';
  
//       heading.addEventListener('mouseover', () => {
//         revealIcon.style.display = 'inline';
//       });
  
//       heading.addEventListener('mouseout', () => {
//         revealIcon.style.display = 'none';
//       });
//     }
//   });


document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
    headings.forEach(heading => {
      const revealIcon = heading.querySelector('.icon-link'); // Find the icon *inside* the heading
  
      if (revealIcon) {
        revealIcon.style.display = 'none';
  
        heading.addEventListener('mouseover', () => {
          revealIcon.style.display = 'inline';
        });
  
        heading.addEventListener('mouseout', () => {
          revealIcon.style.display = 'none';
        });
      }
    });
  });

