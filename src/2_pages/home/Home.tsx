import { Container } from "@/5_shared/ui"
import { Sidebar } from "@/3_widgets/sidebar/"
import { Link } from "react-router"

export function Home() {
  return (
    <Container className="mx-auto flex justify-center items-center flex-col">
      <main className="flex gap-x-16 justify-between w-full">
        <Sidebar className="p-6 w-64 pl-0">
        </Sidebar>
        <section className="flex-1">
          <p>section part</p>
        </section>
      </main>
    </Container>
  )
}
