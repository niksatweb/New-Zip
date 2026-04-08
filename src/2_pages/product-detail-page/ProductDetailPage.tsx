import { useProductDetailQuery } from "@/4_entities/product"
import { Container } from "@/5_shared/ui"
import { useSearchParams } from "react-router"

export const ProductDetailPage = () => {
  const searchParams = useSearchParams()
  console.log(searchParams)
  const { productDetail, isLoading } = useProductDetailQuery('HMI_003')
  return (
    <Container className="mx-auto flex">
      <div></div>
    </Container>
  )
}
