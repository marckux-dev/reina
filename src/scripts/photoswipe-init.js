import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export async function initGallery(selector = '#gallery') {
  const links = document.querySelectorAll(`${selector} a`);
  if (!links.length) return;

  // Las dimensiones vienen en data-pswp-width/height desde el build.
  // Fallback para enlaces antiguos sin esos atributos, sin descargar el original.
  links.forEach((link) => {
    if (link.dataset.pswpWidth && link.dataset.pswpHeight) return;
    const rendered = link.querySelector('img');
    if (rendered) {
      link.dataset.pswpWidth = rendered.naturalWidth || rendered.width || 800;
      link.dataset.pswpHeight = rendered.naturalHeight || rendered.height || 600;
    }
  });

  const lightbox = new PhotoSwipeLightbox({
    gallery: selector,
    children: 'a',
    pswpModule: () => import('photoswipe'),
    bgOpacity: 0.85,
    clickToCloseNonZoomable: true,
  });
  lightbox.init();
}
