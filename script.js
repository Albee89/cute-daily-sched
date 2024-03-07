/// Buttons ///


document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (button) {
      button.addEventListener('click', handleButtonClick);
    });
  });
  
  function handleButtonClick(event) {
    alert('Yay!');
  }
  
/// Home Page Link ///

document.addEventListener("DOMContentLoaded", function() {
  var currentPageLink = document.getElementById("current-page-link");

  if (currentPageLink) {
    currentPageLink.href = window.location.href;
  }
});

