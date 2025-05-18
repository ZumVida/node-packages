import type { IUser } from '@zumvida/common'

export interface IStore {
  id: string
  name: string
  slug: string
  image: string | null
  description: string | null
}

export interface IStoreExtended extends IStore {
  owner?: IUser | null
}
