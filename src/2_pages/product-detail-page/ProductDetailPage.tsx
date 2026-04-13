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
import { ImageGallery } from "@/3_widgets/imageGallery"
import { ProductDetailGallery } from "@/4_entities/product"
import { Loader2 } from "lucide-react"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetailQuery(id)
  return (
    <Container className="mx-auto flex justify-center items-center">
      {isLoading ? (
        <Loader2 size={60} className="animate-spin" />
      ) : (
        <div className="flex items-start justify-center w-full gap-x-20">
          <div className="">
            <ProductDetailGallery
              className="max-w-120"
              product={productDetail}
            ></ProductDetailGallery>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <ProductName name={productDetail?.name}></ProductName>
            <ProductCondition
              condition={productDetail?.condition}
            ></ProductCondition>
            <p>{productDetail?.description}</p>
            <ProductPrice
              className="flex items-end gap-x-8 text-xl"
              price={productDetail?.price}
            ></ProductPrice>
          </div>
        </div>
      )}
    </Container>
  )
}
