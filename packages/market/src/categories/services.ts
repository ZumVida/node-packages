import type { IPaginatedData } from '@zumvida/common'
import type { AxiosInstance } from 'axios'
import type { ICategory } from './types'

export default function (api: AxiosInstance) {
  const baseUrl = 'market/categories'

  return {
    filter: () => api.get<IPaginatedData<ICategory>>(baseUrl)
  }
}
