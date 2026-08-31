import { Container, PageTitle, PageSubtitle } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"
import {
  ProductGrid,
  ProductCard,
  ProductGridSkeleton,
} from "@/4_entities/product"
import { useProductListQuery } from "@/4_entities/product"
import { useContext, createContext, useState } from "react"

export function Home() {
  const { productList, isLoading } = useProductListQuery()
  const [selectedManufacturer, setSelectedManufacturer] = useState("all")

  let brands = new Set()

  productList.forEach((p) => {
    if (!brands.has(p.brand)) {
      brands.add(p.brand)
    }
  })

  const filteredProductList =
    selectedManufacturer === "all"
      ? productList
      : productList.filter(
          (p) =>
            p.brand.toLowerCase() === selectedManufacturer.toLocaleLowerCase()
        )

  const mappedBrands = [...brands]

  return (
    <Container className="mx-auto flex">
      <main className="flex gap-x-16 justify-between w-full h-full">
        <Sidebar
          brands={mappedBrands}
          className="px-6 w-64 pl-0 sticky top-0 h-full overflow-y-auto"
          selectedManufacturer={selectedManufacturer}
          handleClick={setSelectedManufacturer}
        ></Sidebar>
        <section className="flex-1 pb-6">
          <PageTitle>Промышленное оборудование</PageTitle>
          <PageSubtitle>
            <p>Прямые поставки от ведущих мировых производителей.</p>
            <p>Официальная гарантия и техническая поддержка.</p>
          </PageSubtitle>
          <ProductGrid className="pt-6">
            {isLoading ? (
              <ProductGridSkeleton />
            ) : (
              filteredProductList.map((product, n) => (
                <ProductCard key={n} product={product}></ProductCard>
              ))
            )}
          </ProductGrid>
        </section>
      </main>
    </Container>
  )
}
