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
  items: {
    id: number
    technologies: string[]
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
    category: 'frontend' | 'fullstack'
    technologies: string[]
    description: string
  }[]
}
