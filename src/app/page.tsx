import Link from "next/link";
import { Background } from "~/components/background";
import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
    <Background className="flex items-center justify-center">
      <div className="animate-fade-in flex flex-col gap-8 p-4">
        <div className="flex max-w-sm flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-black">IDK what the name is yet.</h1>
          <p className="font-base text-xl">
            An AI powered tool to help you in your darkest hour.
          </p>
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
