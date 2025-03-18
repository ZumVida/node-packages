import type { IBookingBusiness } from '../business/types'

export interface IBookingService {
  id: string
  name: string
  image: string | null
  description: string | null
  duration: number
  price: number
}

export interface IBookingServiceExtended extends IBookingService {
  business: IBookingBusiness
}
