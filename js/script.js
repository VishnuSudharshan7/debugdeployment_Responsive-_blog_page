$(document).ready(function(){
    $('.menu-toggle').on('click',function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });



  $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    
    
    
    });

})
function search() {
  var input = document.getElementsByClassName('text-input').value.toLowerCase();
  var searchResults = document.getElementById('searchResults');
  
  // Clear previous search results
  searchResults.innerHTML = "";
  
  // Fetch data from the server
  fetch('' + input)
    .then(response => response.json())
    .then(data => {
      // Process the received data and display search results
      data.forEach(function(result) {
        var listItem = document.createElement('div');
        listItem.textContent = result;
        searchResults.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
