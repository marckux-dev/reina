import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export async function initGallery(selector = '#gallery') {
  const links = document.querySelectorAll(`${selector} a`);
  if (!links.length) return;

  await Promise.allSettled([...links].map(async (link) => {
    try {
      const img = new Image();
      img.src = link.href;
      await img.decode();
      link.dataset.pswpWidth = img.naturalWidth;
      link.dataset.pswpHeight = img.naturalHeight;
    } catch {
      // Fallback: leer dimensiones del <img> ya renderizado
      const rendered = link.querySelector('img');
      if (rendered) {
        link.dataset.pswpWidth = rendered.naturalWidth || rendered.width || 800;
        link.dataset.pswpHeight = rendered.naturalHeight || rendered.height || 600;
      }
    }
  }));

  const lightbox = new PhotoSwipeLightbox({
    gallery: selector,
    children: 'a',
    pswpModule: () => import('photoswipe'),
    bgOpacity: 0.85,
    clickToCloseNonZoomable: true,
  });
  lightbox.init();
}
