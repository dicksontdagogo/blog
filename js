// This code will add some basic functionality to your website,

// such as making the navigation bar clickable.

// Add event listeners to the navigation bar links

$('nav a').on('click', function() {

  // Get the href attribute of the link

  var href = $(this).attr('href');

  // Navigate to the href

  window.location.href = href;

});

