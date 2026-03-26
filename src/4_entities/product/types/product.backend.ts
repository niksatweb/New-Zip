export interface ProductBackend {
  condition: "New" | "Used"
  onStock: boolean
  onStockQuantity: number
  previewImageUrl: string
  previewImageAlt: string
  brand: string
  name: string
  deliveryTime: number
  price: number
}

export interface ProductDetailBackend extends ProductBackend {
  id: string
  description: string
  images: string[]
  manufacturerId: string
  datasheet: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
