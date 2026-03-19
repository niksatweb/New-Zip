import { Container } from "@/7_shared/ui";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Container className={"relative text-primary " + (className ?? "")}>
      <div className="w-full bg-primary text-primary-content flex h-20 items-center">
        <h1
          className={"ml-5 text-primary text-2xl"}
        >
          Поставки запчастей любого <br/> мирового бренда
        </h1>
      </div>
    </Container>
  );
};
