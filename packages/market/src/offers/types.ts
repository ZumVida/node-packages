import type { ICategory } from '@zumvida/market/categories/types'

export interface IOffer {
  id: string
  image: string | null
  name: string
  description: string | null
  category: ICategory
  stock: number
  price: IOfferPrices
  rating: number
}

export interface IOfferExtended extends IOffer {
  gallery: string[] | null
  attributes: IOfferAttributes | null
  meta: IOfferMetadata | null
}

interface IOfferAttributes {
  [key: string]: string | number
}

export interface IOfferMetadata {
  variant: string | null
  sales: number
  tags: string[]
}

export interface IOfferStock {
  type: OfferStockType
  quantity: number | null
}

export enum OfferStockType {
  Limited = 'in-stock',
  Out = 'out-stock',
  Income = 'income'
}

export interface IOfferPrices {
  sell: number
  inversion: number | null | undefined
  discount: number | null | undefined
  reseller: number | null | undefined
}
