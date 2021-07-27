type Person = {
  name: string
  friend?: {
    name: string
    age?: number
  }
}

const info: Person = {
  name: 'why',
  friend: {
    name: 'kobe'
  }
}