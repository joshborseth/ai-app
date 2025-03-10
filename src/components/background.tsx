import { Circle, Hexagon, Pentagon, Square, Triangle } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export function Background({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <main
      className={cn(
        "bg-bg min-h-[100dvh] w-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]",
        className,
      )}
    >
      <Triangle
        fill="var(--secondary)"
        size={75}
        className="animate-fade-in absolute bottom-[5%] right-[15%]"
      />
      <Circle
        fill="var(--tertiary)"
        size={75}
        className="animate-fade-in absolute right-[7%] top-[20%]"
      />
      <Square
        fill="var(--quaternary)"
        size={75}
        className="animate-fade-in absolute bottom-[10%] left-[10%]"
      />
      <Hexagon
        fill="var(--quinary)"
        size={75}
        className="animate-fade-in absolute right-[20%] top-[2%]"
      />
      <Pentagon
        fill="var(--senary)"
        size={75}
        className="animate-fade-in absolute left-[5%] top-[10%]"
      />
      {children}
    </main>
  );
}
