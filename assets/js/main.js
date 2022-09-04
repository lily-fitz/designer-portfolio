//sticky header

$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.lily-sticky-header').addClass('active')
    } else {
      $('.lily-sticky-header').removeClass('active')
    }
  })
})

//https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp
