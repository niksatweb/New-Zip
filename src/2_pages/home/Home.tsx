import { Container, PageTitle, PageSubtitle } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"

export function Home() {
  return (
    <Container className="mx-auto flex justify-center items-center flex-col">
      <main className="flex gap-x-16 justify-between w-full">
        <Sidebar className="px-6 w-64 pl-0"></Sidebar>
        <section className="flex-1 py-6">
          <PageTitle>Промышленное оборудование</PageTitle>
          <PageSubtitle>
            Прямые поставки от ведущих мировых производителей. Официальная
            гарантия и техническая поддержка.
          </PageSubtitle>
          <p>section part</p>
        </section>
      </main>
    </Container>
  )
}
