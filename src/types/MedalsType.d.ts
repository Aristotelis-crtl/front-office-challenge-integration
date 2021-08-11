export interface Medal {
  gold: number
  silver: number
  bronze: number
}
export interface Medals {
  key: string
  country: string
  total?: number
  medals: Medal
}
