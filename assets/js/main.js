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

// const introWelcome = document.querySelectorAll('#intro__svg-welcome path')

// for (let i = 0; i < localStorage.length; i++) {
//   console.log(i)
// }

//const intro = document.getElementById(intro)
//const introElements = document.querySelectorAll('#intro > *')

// window.addEventListener('scroll', () => {
//   const value = window.scrollY
//   console.log(value)
//   //intro.style.opacity = 100 - value + '%'
// })

// const scrollContainer = document.getElementById('projects')

// scrollContainer.addEventListener('wheel', (evt) => {
//   evt.preventDefault()
//   scrollContainer.scrollLeft += evt.deltaY
// })
