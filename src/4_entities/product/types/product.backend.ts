export interface ProductBackend {
  id: string
  condition: "New" | "Used"
  onStock: boolean
  onStockQuantity: number
  previewImageUrl: string
  previewImageAlt: string
  brand: string
  name: string
  deliveryTime: number
  price: number
  productCode: string
}

export interface ProductDetailBackend extends ProductBackend {
  description: string
  images: string[]
  datasheet: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
