
var sticky = document.querySelector('nav.sticky');

var makeHeaderSticky = function(){
    if (sticky.scrollTop >= 150){
        sticky.classList.add('fixed')
    } else if (sticky.classList.contains('fixed')) {
        sticky.classList.remove('fixed')
    }
}

document.body.addEventListener('scroll', makeHeaderSticky);
document.body.addEventListener('resize', makeHeaderSticky);
document.body.addEventListener('load', makeHeaderSticky);
