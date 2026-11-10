import LogoMark from "@/components/brand/LogoMark";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-start gap-6">
        <LogoMark className="size-16" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">404</p>
        <h1 className="max-w-xl text-4xl font-medium sm:text-5xl">This page is still in the workshop.</h1>
        <p className="max-w-md text-muted">
          It may have moved, or it hasn’t been built yet. Head back home or request a quote.
        </p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </Container>
    </section>
  );
}
