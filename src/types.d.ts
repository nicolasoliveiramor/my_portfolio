declare interface MyProfile {
  apresentation: {
    id: number
    title: string
    description: string
  }[]
  skills: {
    frontDominances: {
      id: number
      technologies: string[]
    }[]
    frontKnowledges: {
      id: number
      technologies: string[]
    }[]
    backKnowledges: {
      id: number
      technologies: string[]
    }[]
  }
}
