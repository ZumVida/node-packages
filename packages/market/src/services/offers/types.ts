export interface IMarketOffer {
  id: string
  name: string
  image: string
  description: string | null
  small_description: string | null
  price: number
  metadata: IMarketOfferMetadata
  stock: IMarketOfferStock
}

export interface IMarketOfferExtended extends IMarketOffer {
  prices: IMarketOfferPrices
  gallery: string[] | null
}

export interface IMarketOfferMetadata {
  rating: number
}

export interface IMarketOfferStock {
  type: MarketOfferStockType
  quantity: number | null
}

export enum MarketOfferStockType {
  Infinite = 'infinite',
  Limited = 'limited',
  Out = 'out'
}

export interface IMarketOfferPrices {
  sell: number
  inversion: number | null
  discount: number | null
}
