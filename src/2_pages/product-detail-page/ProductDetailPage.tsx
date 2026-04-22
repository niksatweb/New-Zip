import { useProductDetailQuery } from "@/4_entities/product"
import { Container, FavoritesButton } from "@/5_shared/ui"
import { useParams } from "react-router"
import { ProductPrice } from "@/4_entities/product/ui/productCard/ProductPrice"
import { Condition } from "./ui/Condition"
import { ProductDetailGallery } from "@/4_entities/product"
import { Loader2 } from "lucide-react"
import { Download } from "lucide-react"
import { ProductCode } from "./ui/ProductCode"
import { ProductAvailability } from "./ui/ProductAvailability"
import { Name } from "./ui/Name"
import { Price } from "./ui/Price"
import { Description } from "./ui/Description"
import { DeliveryTime } from "./ui/DeliveryTime"
import { AddToCartButton } from "./ui/AddToCartButton"
import { AddToFavoritesButton } from "./ui/AddToFavoritesButton"
import { Manufacturer } from "./ui/Manufacturer"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetailQuery(id)
  return isLoading ? (
    <div className="w-full h-150 flex items-center justify-center">
      <Loader2 size={160} className="animate-spin text-primary/20" />
    </div>
  ) : (
    <Container className="mx-auto flex justify-center items-center h-full">
      <div className="flex items-start justify-center w-full gap-x-20">
        <div className="flex flex-col gap-y-1 relative">
          <div className="absolute left-0 top-0 z-20 flex flex-col gap-1">
            <Condition condition={productDetail?.condition} />
            <ProductAvailability onStock={productDetail?.onStock} />
          </div>
          <ProductDetailGallery
            className="max-w-100"
            product={productDetail}
          ></ProductDetailGallery>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div>
            <Manufacturer>{productDetail?.brand}</Manufacturer>
            <Name>{productDetail?.name}</Name>
          </div>
          <ProductCode>{productDetail?.productCode}</ProductCode>
          <Description>{productDetail?.description}</Description>
          <Price className="mt-12" price={productDetail?.price} />
          <DeliveryTime>{productDetail?.deliveryTime}</DeliveryTime>
          <div className="flex items-center gap-4">
            <AddToCartButton />
            <AddToFavoritesButton />
          </div>
          <div className="flex gap-x-2">
            <p>Техническая документация:</p>
            <a href={productDetail?.datasheet} className="flex gap-x-2 group">
              Скачать
              <Download className="group-hover:text-primary/50" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}
