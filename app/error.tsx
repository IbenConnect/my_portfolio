"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Error
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Something went wrong.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Please try again. If the problem persists, you can head back home.
        </p>
        <div className="mt-8 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border/60 bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Return Home
          </Link>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
