import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  contained?: boolean;
}

export default function Section({
  className,
  containerClassName,
  contained = true,
  id,
  children,
  ...props
}: SectionProps) {
  const content = contained ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      data-slot="section"
      className={cn(
        "relative scroll-mt-20 py-20 sm:py-24 lg:py-28",
        className,
      )}
      {...props}
    >
      {content}
    </section>
  );
}
