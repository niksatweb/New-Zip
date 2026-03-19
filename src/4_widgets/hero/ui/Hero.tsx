import { Container } from "@/7_shared/ui";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Container className="text-primary">
      <div className="relative text-primary-content h-50">
        <h1
          className="
        px-1 top-6 
        max-w-100 text-2xl
         absolute
        md:text-3xl
        text-primary"
        >
          Поставки запчастей любого мирового бренда
        </h1>
      </div>
    </Container>
  );
};
