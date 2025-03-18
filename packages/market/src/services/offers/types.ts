export interface IMarketOffer {
  id: string
  is_available: boolean
  name: string
  description?: string | undefined
  stock: IMarketOfferStock
  price: IMarketOfferPrices
  rating?: number
}

export interface IMarketOfferExtended extends IMarketOffer {
  gallery: string[] | null
  meta: IMarketOfferMetadata | null
}

export interface IMarketOfferMetadata {
  rating: number
}

export interface IMarketOfferStock {
  type: MarketOfferStockType
  quantity: number | null
}

export enum MarketOfferStockType {
  Limited = 'in-stock',
  Out = 'out-stock',
  Income = 'income'
}

export interface IMarketOfferPrices {
  sell: number
  inversion: number | null
  discount: number | null
}
