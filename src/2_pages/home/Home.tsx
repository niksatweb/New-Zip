import { Container, PageTitle, PageSubtitle } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"
import { ProductGrid, ProductCard } from "@/4_entities/product"
import { api } from "@/5_shared/api"
import { useEffect, useState } from "react"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export function Home() {
  const [products, setProducts] = useState<ProductBackend[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api.getProductList().then((data) => {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <Container className="mx-auto flex">
      <main className="flex gap-x-16 justify-between w-full h-full">
        <Sidebar className="px-6 w-64 pl-0 sticky top-0 h-full overflow-y-auto"></Sidebar>
        <section className="flex-1 py-6">
          <PageTitle>Промышленное оборудование</PageTitle>
          <PageSubtitle>
            Прямые поставки от ведущих мировых производителей. Официальная
            гарантия и техническая поддержка.
          </PageSubtitle>
          <ProductGrid className="pt-6">
            {isLoading ? (
              <p className="whitespace-nowrap">
                Идёт загрузка каталога товаров...
              </p>
            ) : (
              products.map((product) => (
                <ProductCard product={product}></ProductCard>
              ))
            )}
          </ProductGrid>
        </section>
      </main>
    </Container>
  )
}
