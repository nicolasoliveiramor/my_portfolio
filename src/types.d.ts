declare interface MyProfile {
  presentation: {
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
  }
}
