import { Container, PageTitle, PageSubtitle } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"
import {
  ProductGrid,
  ProductCard,
  ProductGridSkeleton,
} from "@/4_entities/product"
import { useProductListQuery } from "@/4_entities/product"
import { useState } from "react"
import { useParams } from "react-router"

export function Home() {
  const { productList, isLoading } = useProductListQuery()
  let brands = new Set()

  productList.forEach((p) => {
    if (!brands.has(p.brand)) {
      brands.add(p.brand)
    }
  })

  const { brand } = useParams()
  const currentBrand = brand || ""

  const filteredProductList =
    currentBrand === ""
      ? productList
      : productList.filter(
          (p) => p.brand.toLowerCase() === currentBrand.toLocaleLowerCase()
        )

  const mappedBrands = [...brands] as string[]

  return (
    <Container className="mx-auto flex">
      <main className="flex gap-x-16 justify-between w-full h-full">
        <Sidebar
          brands={mappedBrands}
          className="px-6 w-64 pl-0 sticky top-0 h-full overflow-y-auto"
          selectedBrand={currentBrand}
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
