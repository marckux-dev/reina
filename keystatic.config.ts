import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },

  collections: {
    trabajos: collection({
      label: 'Trabajos realizados',
      slugField: 'slug',
      path: 'src/content/trabajos/*',
      format: { contentField: 'body' },
      schema: {
        slug: fields.text({
          label: 'URL del trabajo',
          description: 'Solo minúsculas, números y guiones. Ej: limpieza-moqueta-hotel-benidorm',
          validation: { isRequired: true },
        }),
        title: fields.text({
          label: 'Título SEO',
          description: 'Para la pestaña del navegador y meta title',
          validation: { isRequired: true },
        }),
        h1: fields.text({
          label: 'Título de la página (H1)',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Meta descripción',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Fecha del trabajo',
          validation: { isRequired: true },
        }),
        city: fields.text({
          label: 'Ciudad',
          validation: { isRequired: true },
        }),
        location: fields.text({
          label: 'Nombre del lugar',
          description: 'Opcional. Ej: Hotel Sandos Mónaco',
        }),
        lat: fields.number({ label: 'Latitud' }),
        lng: fields.number({ label: 'Longitud' }),
        service: fields.text({
          label: 'Slug del servicio relacionado',
          description: 'Ej: limpieza-cristales',
          validation: { isRequired: true },
        }),
        serviceLabel: fields.text({
          label: 'Nombre del servicio',
          description: 'Ej: Limpieza de Cristales',
          validation: { isRequired: true },
        }),
        coverImage: fields.object(
          {
            src: fields.image({
              label: 'Imagen de portada',
              directory: 'src/assets/images',
              publicPath: '',
            }),
            alt: fields.text({
              label: 'Texto alternativo (alt SEO)',
              validation: { isRequired: true },
            }),
          },
          { label: 'Imagen de portada' }
        ),
        gallery: fields.array(
          fields.object({
            src: fields.image({
              label: 'Imagen',
              directory: 'src/assets/images',
              publicPath: '',
            }),
            alt: fields.text({ label: 'Texto alternativo (alt)' }),
            phase: fields.select({
              label: 'Fase',
              options: [
                { label: '—', value: '' },
                { label: 'Antes', value: 'antes' },
                { label: 'Durante', value: 'durante' },
                { label: 'Después', value: 'después' },
              ],
              defaultValue: '',
            }),
          }),
          {
            label: 'Galería de imágenes',
            itemLabel: props => props.fields.alt.value || 'Imagen',
          }
        ),
        videoUrl: fields.url({
          label: 'URL del Reel de Instagram',
          description: 'Opcional. Ej: https://www.instagram.com/p/...',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          }
        ),
        body: fields.mdx({ label: 'Contenido' }),
      },
    }),
  },
})
