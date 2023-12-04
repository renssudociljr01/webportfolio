document.addEventListener("DOMContentLoaded", function () {
    // Create a div for the overlay
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
  
    // Add the spinner to the overlay
    overlay.insertAdjacentHTML('beforeend', '<div class="spinner"></div>');
  
    // Add a class to the body to apply the blur effect to the content behind the overlay
    document.body.classList.add('blur');
  
    // Remove the blur and the overlay after 3 seconds
    setTimeout(function () {
      document.body.classList.remove('blur');
      overlay.parentNode.removeChild(overlay);
    }, 1000);
  });
  