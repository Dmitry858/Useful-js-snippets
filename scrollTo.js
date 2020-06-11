// На якорной ссылке должен быть навешан класс smooth-scroll
if (document.querySelector('.smooth-scroll')) {
    var links = document.querySelectorAll('.smooth-scroll');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();

            var blockID = this.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }        
}
