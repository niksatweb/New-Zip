import { Container } from "@/7_shared/ui";

export const Hero = ({ className }: { className?: string }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Container className={"relative text-primary " + (className ?? "")}>
      <div className="w-full bg-primary text-primary-content flex h-20 items-center">
        <h1
          className={"ml-5 text-primary text-2xl"}
        >
          Поставки запчастей любого <br/> мирового бренда
=======
    <Container className="text-primary">
      <div className="relative text-primary-content h-50">
=======
    <Container className={"relative text-primary " + (className ?? "")}>
      <div className="w-full bg-primary text-primary-content flex h-20 items-center">
>>>>>>> 8eac456 (15-add-hero: WIP)
        <h1
          className={"ml-5 text-primary text-2xl"}
        >
<<<<<<< HEAD
          Поставки запчастей любого мирового бренда
>>>>>>> 56fae87 (15-add-hero: WIP)
=======
          Поставки запчастей любого <br/> мирового бренда
>>>>>>> 8eac456 (15-add-hero: WIP)
        </h1>
      </div>
    </Container>
  );
};
