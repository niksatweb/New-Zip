import { Container, PageTitle, PageSubtitle } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"
import {
  ProductGrid,
  ProductCard,
  ProductGridSkeleton,
} from "@/4_entities/product"
import { useProductListQuery } from "@/4_entities/product"

export function Home() {
  const { productList, isLoading } = useProductListQuery()

  return (
    <Container className="mx-auto flex">
      <main className="flex gap-x-16 justify-between w-full h-full">
        <Sidebar className="px-6 w-64 pl-0 sticky top-0 h-full overflow-y-auto"></Sidebar>
        <section className="flex-1 py-6">
          <PageTitle>Промышленное оборудование</PageTitle>
          <PageSubtitle>
            <p>Прямые поставки от ведущих мировых производителей.</p>
            <p>Официальная гарантия и техническая поддержка.</p>
          </PageSubtitle>
          <ProductGrid className="pt-6">
            {isLoading ? (
              <ProductGridSkeleton />
            ) : (
              productList.map((product, n) => (
                <ProductCard key={n} product={product}></ProductCard>
              ))
            )}
          </ProductGrid>
        </section>
      </main>
    </Container>
  )
}
