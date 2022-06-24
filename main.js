window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  function activateMenuAtCurrentSection()


}


function activateMenuAtCurrentSection(){
const targetLine = scrollY + innerHeight / 2
















}

function showNavOnScroll() {
  if (scrollY > 0) {
    navig.classList.add('scroll')
  } else {
    navig.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px'
}).reveal(`
#home, 
#home img,
 #home .stats,
  #services, 
  #services header,
   #services .card
   #about,
   #about header,
   #about .content`)
