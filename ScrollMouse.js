var scrollContainer = document.getElementById('scrollContainer');

  scrollContainer.addEventListener('wheel', function (event) {
    scrollContainer.scrollLeft += event.deltaY;
    
    event.preventDefault();
  });