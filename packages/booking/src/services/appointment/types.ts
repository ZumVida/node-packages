import type { IUser } from '@zumvida/common'
import type { IBookingBusiness } from '../business/types'
import type { IBookingService } from '../services/types'

export interface IBookingAppointment {
  id: string
  service: IBookingService
  business: IBookingBusiness
  customer: IUser
  date: Date
  status: BookingAppointmentStatus
  shift: IBookingAppointmentShift
  created_at: string | null
  updated_at: string | null
}

export enum BookingAppointmentStatus {
  Canceled = 'canceled',
  Completed = 'completed',
  Confirmed = 'confirmed',
  Pending = 'pending'
}

export interface IBookingAppointmentShift {
  start: string
  end: string
}
