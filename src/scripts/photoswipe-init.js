import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export async function initGallery(selector = '#gallery') {
  const links = document.querySelectorAll(`${selector} a`);

  await Promise.all([...links].map(async (link) => {
    const img = new Image();
    img.src = link.href;
    await img.decode();
    link.dataset.pswpWidth = img.naturalWidth;
    link.dataset.pswpHeight = img.naturalHeight;
  }));

  const lightbox = new PhotoSwipeLightbox({
    gallery: selector,
    children: 'a',
    pswpModule: () => import('photoswipe'),
//    showHideAnimationType: 'fade',
    bgOpacity: 0.85,
    clickToCloseNonZoomable: true,
  });
  lightbox.init();
}

