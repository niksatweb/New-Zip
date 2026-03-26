export const ProductCondition = {
  New: "NEW",
  Used: "USED",
} as const

export interface ProductBackend {
  condition: (typeof ProductCondition)[keyof typeof ProductCondition]
  previewImageUrl: string
  previewImageAlt: string
  brand: string
  name: string
  deliveryTime: number
  price: number
  className: string
}

export interface ProductDetailBackend extends ProductBackend {
  onStock: boolean
  description: string
  images: string[]
  manufacturerId: string
  datasheet: string
}
