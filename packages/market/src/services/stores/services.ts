import type { IPaginatedData } from '@zumvida/common'
import type { AxiosInstance } from 'axios'
import type { IMarketStore } from './types'

function customer(api: AxiosInstance) {
  const baseUrl = '/market/stores'

  return {
    filter: () => api.get<IPaginatedData<IMarketStore>>(baseUrl)
  }
}

export default function (api: AxiosInstance) {
  return {
    customer: customer(api)
  }
}
