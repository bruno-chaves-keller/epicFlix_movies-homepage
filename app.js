$(document).ready(() =>{
    $('#hamburguer-menu').click(() => {
        $('#hamburguer-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })
})

function openVideoPopup(videoId) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    const popup = document.createElement('div');
    popup.classList.add('video-popup');
    popup.appendChild(iframe);

    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'X';
    popup.appendChild(closeButton);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    overlay.addEventListener('click', closeVideoPopup);
    closeButton.addEventListener('click', closeVideoPopup);
}

function closeVideoPopup() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.video-popup');

    overlay.remove();
    popup.remove();
}
