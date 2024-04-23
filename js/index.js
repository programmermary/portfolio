
    // const toggleBtn = document.getElementById('toggle-btn');
    // const navbar = document.getElementById('navbar');
    // toggleBtn.addEventListener('click', function() {
    //     // Toggle the visibility of the navbar
    //     if (navbar.style.display === 'none') {
    //       navbar.style.display = 'block';
    //     } else {
    //       navbar.style.display = 'none';
    //     }
    //   });
      // Get the button and the navbar
  const toggleBtn = document.getElementById('toggle-btn');
  const navbar = document.getElementById('navbar');
  toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });
