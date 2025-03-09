import { Circle, Hexagon, Pentagon, Square, Triangle } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="bg-bg flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto max-w-full px-5 text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
          Heading
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          description
        </p>
        <Button>Get started</Button>

        <Triangle
          fill="var(--secondary)"
          size={100}
          className="absolute right-[25%] top-[65%] hidden md:block"
        />
        <Circle
          fill="var(--tertiary)"
          size={100}
          className="absolute left-[75%] top-[30%] hidden md:block"
        />
        <Square
          fill="var(--quaternary)"
          size={100}
          className="absolute left-[10%] top-[70%] hidden md:block"
        />
        <Hexagon
          fill="var(--quinary)"
          size={100}
          className="absolute right-[40%] top-[15%] hidden md:block"
        />
        <Pentagon
          fill="var(--senary)"
          size={100}
          className="absolute left-[20%] top-[15%] hidden md:block"
        />
      </div>
    </main>
  );
}
