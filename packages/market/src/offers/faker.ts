import { OfferStockType } from './types'
import type { IOffer } from './types'

export default function (count: number = 10): IOffer[] {
  const data: IOffer[] = []

  for (let i = 0; i < count; i++) {
    data.push({
      id: `offer${i}`,
      image: 'https://picsum.photos/128',
      description: `Offer ${i} description text for some informaion data`,
      name: `Offer ${i} name extensive`,
      price: {
        discount: 15 * i,
        sell: 17 * i,
        inversion: 12 * i
      },
      stock: {
        quantity: i * 2,
        type: OfferStockType.Limited
      },
      rating: 4.5
    })
  }
  return data
}
