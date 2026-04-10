import { useProductDetailQuery } from "@/4_entities/product"
import { Container, FavoritesButton } from "@/5_shared/ui"
import { useParams } from "react-router"
import { LoaderCircle } from "lucide-react"
import { ProductImage } from "@/4_entities/product/ui/productCard/ProductImage"
import { ProductBrand } from "@/4_entities/product/ui/productCard/ProductBrand"
import { ProductName } from "@/4_entities/product/ui/productCard/ProductName"
import { ProductDeliveryTime } from "@/4_entities/product/ui/productCard/ProductDeliveryTime"
import { ProductPrice } from "@/4_entities/product/ui/productCard/ProductPrice"
import { BasketButton } from "@/5_shared/ui"
import { ProductCondition } from "@/4_entities/product/ui/productCard/ProductCondition"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetailQuery(id)
  console.log(productDetail)
  return (
    <Container className="mx-auto flex justify-center items-center">
      <ProductImage
        src={productDetail?.previewImageUrl}
        alt={productDetail?.previewImageAlt}
      />
    </Container>
  )
}
