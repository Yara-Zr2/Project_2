// Code for nav bar when scrolling
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Add the class when scrolling down
    } else {
        header.classList.remove('scrolled'); // Remove the class when scrolling to the top
    }
});

// Code for login bean when pressed it wil show up
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }
