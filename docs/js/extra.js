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




//anchor links and heading-id logic
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll(' h2, h3, h4, h5, h6');
  
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

