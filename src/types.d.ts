declare interface MyProfile {
  apresentation: {
    id: number
    title: string
    description: string
  }[]
  skills: {
    sectionTitle: string
    items: {
      id: number
      title: string
      technologies: string
    }[]
  }[]
}
