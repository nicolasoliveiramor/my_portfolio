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
    title: string
    technologies: string
  }[]
}

declare interface Iprojects {
  items: {
    id: number
    image: string
    title: string
    category: string
    technologies: string
    description: string
  }[]
}
