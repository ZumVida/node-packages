export interface IOffer {
  id: string
  image: string | null
  name: string
  description: string | null
  stock: IOfferStock
  price: IOfferPrices
  rating?: number
}

export interface IOfferExtended extends IOffer {
  gallery: string[] | null
  meta: IOfferMetadata | null
}

export interface IOfferMetadata {
  rating: number
  sales: number
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
}
