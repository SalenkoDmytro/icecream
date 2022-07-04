// import $ from 'jquery';
const refs = {
    header: document.querySelector("[data-header]"),
    links: document.querySelectorAll('nav ul a[href^="#"]')
};


refs.links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1)
    
        const scrollTarg = document.getElementById(href);
        const topOffset = refs.header.offsetHeight;
   
        const elemPosition = scrollTarg.getBoundingClientRect().top;
        const offsetPosition = elemPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior:'smooth'
        })
    })
})

$(window).on('scroll', function () {
    $(refs.header).toggleClass('fixed', $(this).scrollTop() > $('.hero__section').height())
})

