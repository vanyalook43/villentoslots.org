document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
          setTimeout(() => {
              preloader.classList.add('loaded');
              setTimeout(() => {
                  preloader.remove();
              }, 600);
          }, 400);
      }
  });
  


  const animationSetup = () => {
     document.body.classList.add('animations-ready');
  };
  animationSetup();
  
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
      img.classList.add('lazy-loaded');
      if (img.complete) {
          img.classList.add('loaded');
          img.classList.remove('img-loading');
      } else {
          img.addEventListener('load', () => {
              img.classList.add('loaded');
              img.classList.remove('img-loading');
          });
          img.addEventListener('error', () => {
              img.classList.remove('img-loading');
          });
      }
  });
  


  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }


  if (typeof AOS !== 'undefined') {
    setTimeout(() => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
    }, 100);
  }


    const disclaimerModal = document.getElementById('disclaimerPopup');
    if (disclaimerModal) {
        const isAccepted = localStorage.getItem('site_disclaimer_accepted');
        if (!isAccepted) {
            setTimeout(() => {
                disclaimerModal.classList.add('show');
            }, 500);
        }

        const acceptBtn = document.getElementById('acceptDisclaimer');
        const closeBtn = document.getElementById('closeDisclaimer');
        const readMoreBtn = document.getElementById('readMoreDisclaimer');
        const fullTextDiv = document.getElementById('disclaimerFullText');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('site_disclaimer_accepted', 'true');
                disclaimerModal.classList.remove('show');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                disclaimerModal.classList.remove('show');
            });
        }

        if (readMoreBtn && fullTextDiv) {
            readMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const isHidden = getComputedStyle(fullTextDiv).display === 'none';
                if (isHidden) {
                    fullTextDiv.style.display = 'block';
                    readMoreBtn.textContent = 'Read less';
                } else {
                    fullTextDiv.style.display = 'none';
                    readMoreBtn.textContent = 'Read more';
                }
            });
        }
    }
    
});
