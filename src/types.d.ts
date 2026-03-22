declare interface Ipresentation {
  image: string
  items: {
    id: number
    title: string
    description: string
  }[]
}

declare interface Iskills {
  sectionTitle: string
  colors: {
    id: number
    name: string
    hex: string
  }[]
  items: {
    id: number
    technologies: {
      id: number
      name: string
      iconUrl: string
      colorId: number
    }[]
  }[]
}

declare interface Iprojects {
  items: {
    id: number
    image: string
    link: string
    code: string
    codeback?: string
    title: string
    technologies: string[]
    description: string
  }[]
}

declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'