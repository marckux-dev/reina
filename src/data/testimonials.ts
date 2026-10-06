// Add only real, publicly visible Google reviews. Keep the quote in its original language.
// Add reviewUrl only when you have a direct link to that specific review.
export type Testimonial = {
  quote: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewUrl?: string;
};

export const googleReviewsUrl = 'https://maps.app.goo.gl/gBPjTHSERKmAVCoK7';

export const testimonials: Testimonial[] = [
  {
    author: 'Esther Pérez',
    rating: 5,
    quote: 'Muy contenta con el trabajo realizado. Equipo súper puntual, profesional y muy cuidadoso con todos los detalles. El suelo ha quedado impecable, con un acabado brillante y como nuevo. Además, dejó todo limpio al terminar, lo cual se agradece mucho. Sin duda, lo recomendaría y volvería a contar con ellos en el futuro. Comparto un par de imágenes del antes y el después. Una auténtica maravilla. Un 10 de 10. Gracias!!',
  },
  {
    author: 'Jaime',
    rating: 5,
    quote: 'Trabajo espectacular! Muy contento con el trabajo de Aitor, nos ha dejado el comedor brillante como un espejo. Una empresa muy atenta y curiosa con todos los detalles. Volverán sin duda a hacernos el resto de la casa. Gracias!',
  },
  {
    author: 'Lara Sánchez',
    rating: 5,
    quote: 'Estuvieron en casa haciendo un gran trabajo Guillermo y Andrés, profesionales, amables, tranquilos y siempre al detalle, ha quedado todo increíble, cristales, y todo lo que acompaña a ellos, gracias de verdad, nos vemos próximamente.',
  },
  {
    author: 'Marisa Sánchez Jiménez',
    rating: 5,
    quote: 'Trabajo espectacular por parte de Aitor y Guillermo en Apartamentos Benidorm Levante. Nos quedo precioso el suelo y estaba bastante mal la verdad que el buen hacer y profesionalodad de estos chicos nos dejo muy sorprendidos sin duda',
  },
  {
    author: 'Oglala 69',
    rating: 5,
    quote: 'Quiero agradecer a Guillermo y Aitor por su excelente trabajo al pulir el suelo. Han dejado el suelo impecable y, además, son muy profesionales y trabajadores. Al finalizar, todo quedó muy limpio. ¡Recomiendo su servicio sin dudarlo!',
  },
];
