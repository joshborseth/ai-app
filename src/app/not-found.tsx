import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center bg-bg bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="flex flex-col gap-8 p-4">
        <div className="flex max-w-sm flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-black">404 - Not Found</h1>
          <p className="text-xl font-base">
            Oops! Looks like you&apos;re lost.
          </p>
        </div>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Go back
        </Link>
      </div>
    </main>
  );
}
