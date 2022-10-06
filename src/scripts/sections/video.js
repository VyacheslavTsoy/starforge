const videoSection = document.querySelector('.video');

if (videoSection) {
    const playBtn = videoSection.querySelector('.js-play-video');

    playBtn.addEventListener('click', (event) => {
        const videoIframe = videoSection.querySelector('iframe');
        const videoUrl = videoIframe.getAttribute('src');
        const separator = videoUrl.indexOf('?') > 0 ? '&' : '?';

        videoSection.classList.add('video--active');
        videoIframe.setAttribute("src", `${ videoUrl }${separator}autoplay=true`);

    })
}
