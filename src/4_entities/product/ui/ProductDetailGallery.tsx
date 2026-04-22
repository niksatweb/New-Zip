import { useRef, type ReactNode } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/image-gallery.css"
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery"
import type {
  ProductBackend,
  ProductDetailBackend,
} from "../types/product.backend"

export const ProductDetailGallery = ({
  children,
  product,
  className = "",
}: {
  children?: ReactNode
  product?: ProductDetailBackend
  className?: string
}) => {
  const galleryRef = useRef<ImageGalleryRef>(null)
  const imgs = product?.images || []
  const images: GalleryItem[] = imgs.map((i) => ({
    original: i,
    thumbnail: i,
  }))

  return (
    <div className={className}>
      <ImageGallery ref={galleryRef} items={images} showPlayButton={false} />
    </div>
  )
}
