import { useProductDetailQuery } from "@/4_entities/product"
import { Container } from "@/5_shared/ui"
import { useParams } from "react-router"
import { LoaderCircle } from "lucide-react"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetail, isLoading } = useProductDetailQuery(id)
  return (
    <Container className="mx-auto flex justify-center items-center h-svh">
      <div>
        
      </div>
    </Container>
  )
}
