import portadaMontalvos from '@/assets/images/montalvos-portada.jpg' 
import montalvos01 from '@/assets/images/montalvos-01.jpg' 
import montalvos02 from '@/assets/images/montalvos-02.jpg' 
import montalvos03 from '@/assets/images/montalvos-03.jpg' 
import montalvos04 from '@/assets/images/montalvos-04.jpg'
import portadaTheFold from '@/assets/images/thefold_portada.png'
import thefold01 from '@/assets/images/thefold_1.png'
import thefold02 from '@/assets/images/thefold_2.png'
import thefold03 from '@/assets/images/thefold_3.png'
import thefold04 from '@/assets/images/thefold_5.png'
import esclatPortada from '@/assets/images/esclat_portada.png'
import esclat01 from '@/assets/images/esclat_1.png'
import esclat02 from '@/assets/images/esclat_2.png'
import esclat03 from '@/assets/images/esclat_3.png'
import esclat04 from '@/assets/images/esclat_4.png'

export interface Project {
  slug: string
  title: string
  description: string
  imageUrl: string
  tag: string
  year: string
  role: string
  summary: string
  details: string[]
  gallery: {
    src: string
    alt: string
    format: 'wide' | 'square'
  }[]
}

export const projects: Project[] = [
  {
    slug: 'branding-studio',
    title: 'Montalvos',
    description: 'Rebranding del escudo del pueblo y diseño de identidad visual.',
    imageUrl: portadaMontalvos,
    tag: 'Branding',
    year: '2026',
    role: 'Identidad visual',
    summary: 'Proyecto de identidad visual de una libreria y espacio de co-working donde la creatividad y la curiosidad se encuentran.',
    details: [
      'Análisis de la identidad existente y redefinición gráfica del escudo para mejorar su legibilidad y versatilidad.',
      'Diseño de una identidad visual contemporánea capaz de representar al municipio en diferentes soportes.',
      'Aplicación de la marca en elementos de comunicación, señalética y material promocional.',
    ],
    gallery: [
      {
        src: montalvos01,
        alt: 'Aplicación principal de identidad visual',
        format: 'wide',
      },
      {
        src: montalvos02,
        alt: 'Composición gráfica de marca',
        format: 'square',
      },
      {
        src: montalvos03,
        alt: 'Detalle de papelería corporativa',
        format: 'square',
      },
      {
        src: montalvos04,
        alt: 'Mockup de presentación de marca',
        format: 'wide',
      },
    ],
  },
  {
    slug: 'The Fold',
    title: 'The Fold',
    description: 'Diseño y estrategia para una nueva tienda coworking.',
    imageUrl: portadaTheFold,
    tag: 'Branding',
    year: '2025',
    role: 'Identidad visual',
    summary: 'Diseño de una propuesta visual ordenada y atractiva para presentar productos, contenidos y mensajes comerciales con claridad.',
    details: [
      'La identidad visual combina una estética minimalista y cálida mediante una paleta de tonos neutros',
      'El sistema gráfico se desarrolla de forma coherente en aplicaciones',
      'Símbolo de descubrimiento, creatividad y transformación.',
    ],
    gallery: [
      {
        src: thefold01,
        alt: 'Diseño editorial en formato principal',
        format: 'wide',
      },
      {
        src: thefold02,
        alt: 'Detalle de pieza digital editorial',
        format: 'square',
      },
      {
        src: thefold03,
        alt: 'Composición de página y retícula',
        format: 'square',
      },
      {
        src: thefold04,
        alt: 'Presentación amplia de contenidos',
        format: 'wide',
      },
    ],
  },
  {
    slug: 'ESCLAT',
    title: 'ESCLAT',
    description: 'Campaña de comunicación sobre el festival de música, pensament i creativitat.',
    imageUrl: esclatPortada,
    tag: 'Redes',
    year: '2026',
    role: 'Contenido digital',
    summary: 'Campaña pensada para visivilizar el festival de música, pensament i creativitat en redes sociales reconocibles para distintos formatos digitales.',
    details: [
      'Paleta cromática de alto contraste y un sistema de formas geométricas inspirado en el imaginario del festival para captar la atención del público.',
      'Feed de Instagram modular donde cada publicación funciona de manera independiente.',
      'Soportes impresos y digitales, como cartelería, programa del festival y contenido para redes sociales, manteniendo una comunicación visual unificada.',
    ],
    gallery: [
      {
        src: esclat01,
        alt: 'Vista general de campaña digital',
        format: 'wide',
      },
      {
        src: esclat02,
        alt: 'Post cuadrado para redes sociales',
        format: 'square',
      },
      {
        src: esclat03,
        alt: 'Contenido visual para Instagram',
        format: 'square',
      },
      {
        src: esclat04,
        alt: 'Aplicaciones de campaña en equipo',
        format: 'wide',
      },
    ],
  },
  {
    slug: 'Salud mental en diseñadores',
    title: 'Salud mental en diseñadores',
    description: 'Diseño de envases con enfoque sostenible.',
    imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    tag: 'Editorial',
    year: '2026',
    role: 'Diseño editorial',
    summary: 'Diseño de packaging con una lectura limpia, materiales visualmente cuidados y una comunicación enfocada en sostenibilidad.',
    details: [
      'Referencias editoriales para definir el estilo gráfico y establecer una dirección visual coherente con la temática.',
      'Desarrollo del concepto gráfico, selección tipográfica, paleta cromática y sistema editorial.',
      'Maquetación de la publicación aplicando retícula, jerarquía visual y composición tipográfica.',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=85',
        alt: 'Presentación principal de packaging',
        format: 'wide',
      },
      {
        src: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=85',
        alt: 'Detalle cuadrado del envase',
        format: 'square',
      },
      {
        src: 'https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=900&q=85',
        alt: 'Mockup de producto y etiqueta',
        format: 'square',
      },
      {
        src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=85',
        alt: 'Familia de producto en formato amplio',
        format: 'wide',
      },
    ],
  }
]
