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

export const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetailQuery(id)
  return (
    <Container className="mx-auto flex justify-center items-center">
      <div className="flex items-center justify-center w-full gap-x-20">
        <div className="">
          <ProductDetailGallery className="max-w-120" product={productDetail}></ProductDetailGallery>
        </div>
        <div className="flex-1">
          <ProductName name={productDetail?.name}></ProductName>
          <ProductCondition
            condition={productDetail?.condition}
            className=""
          ></ProductCondition>
          <ProductPrice price={productDetail?.price}></ProductPrice>
          <p>{productDetail?.description}</p>
        </div>
      </div>
    </Container>
  )
}
