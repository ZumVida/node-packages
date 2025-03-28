export interface ICategory {
  id: string
  slug: string | null
  name: string
  image: string | null
  is_global: boolean
}

export interface ICategoryCreateRequest {
  name: string
  slug: string | null
  image: string | File | null
  store_id: string | null
}

export type ICategoryUpdateRequest = Partial<ICategoryCreateRequest>
