const faqContainer = document.querySelector('.faq__content');
const faqNav = document.querySelector('.faq__nav');

function toggleFaqItem (event) {
    let targetEl = event.target;

    if (targetEl.classList.contains('faq__item-question')) {
        // faqContainer.querySelectorAll('.faq__item-question--active').forEach((item) => {
        //     item.classList.remove('faq__item-question--active');
        // })

        if (targetEl.classList.contains('faq__item-question--active')) {
            targetEl.classList.remove('faq__item-question--active')
        } else {
            targetEl.classList.add('faq__item-question--active');
        }
    }
}

if (faqContainer) {
    faqContainer.addEventListener('click', (event) => {
        toggleFaqItem(event)
    });
}

if (faqNav) {
    faqNav.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            let targetSelector = event.target.getAttribute('href');
            let targetEl = targetSelector ? document.querySelector(targetSelector) : false;
            let targetOffset = targetEl ? targetEl.getBoundingClientRect().top + window.pageYOffset : false;

            if (targetEl) {
                // targetEl.scrollIntoView({ behavior: 'smooth'});
                window.scroll({
                    top: targetOffset - (headerHeight - 2),
                    behavior: 'smooth'
                });
            }
        }
    })
}
