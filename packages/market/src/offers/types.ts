import type { ICategory } from '@zumvida/market/categories/types'

export interface IOffer {
  readonly id: string
  image: string | null
  name: string
  description: string | null
  category: ICategory
  stock: number
  price: IOfferPrice
  rating: number
}

export interface IOfferPrice {
  sell: number
  inversion: number | null | undefined
  discount: number | null | undefined
  reseller: number | null | undefined
}
