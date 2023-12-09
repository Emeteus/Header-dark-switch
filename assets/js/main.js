const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   if(toggle && nav){
       toggle.addEventListener('click', () =>{
           nav.classList.toggle('show')
       })
   }
}

showMenu('menu-toggle','nav-menu')

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.querySelector(".l-header").style.top = "0";
    } else {
      document.querySelector(".l-header").style.top = `-${document.querySelector(".l-header").offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
  };
