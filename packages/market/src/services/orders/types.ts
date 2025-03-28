import type { ICurrency, IPaymentMethod } from '@zumvida/billing'
import type { ICoords, IUser } from '@zumvida/common'
import type { IOffer } from '@zumvida/market/services/offers/types'

export interface IOrder {
  id: string
  customer: IUser
  prices: IOrderPrice
  payment: IOrderPayment
  items: IOrderItem[]
}

export interface IOrderPayment {
  method: IPaymentMethod
  currency: ICurrency
  status: OrderPaymentStatus
}

export interface IOrderPrice {
  offers: number
  tax: number
  delivery: number
  discount: number
  total: number
}

export interface IOrderItem {
  offer: IOffer
  quantity: number
  price: number
  comments: string | null
}

export interface IOrderDelivery {
  address: string
  coords: ICoords | null
}

export enum OrderPaymentStatus {
  Paid = 'paid',
  Pending = 'pending',
  Refunded = 'refunded'
}

export enum OrderStatus {
  Pending = 'Pending',
  Completed = 'completed',
  Canceled = 'canceled',
  Confirmed = 'confirmed'
}
