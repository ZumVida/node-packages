import type { IUser } from '@zumvida/common'

export interface IBookingBusiness {
  id: string
  name: string
  owner: IUser
  category: string
  description?: string | null | undefined
  location: string
  availability: IBookingBusinessAvailability[]
}

export interface IBookingBusinessAvailability {
  day: string
  open: string
  close: string
}
