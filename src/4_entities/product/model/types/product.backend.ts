export interface ProductBackend {
  condition: "Новый" | "Б/У"
  inFavorites: boolean
  previewImageUrl: string
  previewImageAlt: string
  brand: string
  name: string
  deliveryTime: number
  price: number
  inBasket: boolean
  className: string
}

export interface ProductDetailBackend extends ProductBackend {
  onStock: "В наличии" | "Под заказ"
  description: string
  images: string[]
  manufacturerId: string
  datasheet: string
}
