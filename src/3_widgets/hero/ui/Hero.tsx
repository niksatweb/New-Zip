<<<<<<< Updated upstream:src/3_widgets/hero/ui/Hero.tsx
import { Container } from "@/5_shared/ui"
=======
import { Container } from "@/6_shared/ui"
>>>>>>> Stashed changes:src/4_widgets/hero/ui/Hero.tsx

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Container className={"relative text-primary " + (className ?? "")}>
      <div className="bg-[url('@/7_shared/assets/images/hero-bg.jpg')] bg-cover bg-center w-full bg-primary text-primary-content flex h-20 md:min-h-80 items-center">
        <h1
          className={"ml-15 pl-1 text-2xl md:text-4xl bg-primary/50 py-1 pr-10"}
        >
          Поставки запчастей любого <br /> мирового бренда
        </h1>
      </div>
    </Container>
  )
}
