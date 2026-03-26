export interface ProductBackend {
  condition: "New" | "Used"
  previewImageUrl: string
  previewImageAlt: string
  brand: string
  name: string
  deliveryTime: number
  price: number
}

export interface ProductDetailBackend extends ProductBackend {
  onStock: boolean
  description: string
  images: string[]
  manufacturerId: string
  datasheet: string
}
