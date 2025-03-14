import Link from "next/link";
import { Background } from "~/components/background";
import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
    <Background className="flex items-center justify-center">
      <div className="flex animate-fade-in flex-col gap-8 p-4">
        <div className="flex max-w-sm flex-col items-center gap-4 text-center">
          <h1 className="text-6xl font-black lg:text-7xl">Scottie</h1>
          <h2 className="text-2xl font-base">An AI powered email client.</h2>
        </div>
        <Link
          href="/get-started"
          className={buttonVariants({ variant: "default" })}
        >
          Get Started
        </Link>
      </div>
    </Background>
  );
}
