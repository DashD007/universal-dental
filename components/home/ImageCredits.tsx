import Container from "@/components/ui/Container";
import { imageCredits } from "@/lib/data/imageCredits";

/** License attribution for placeholder photography. Remove once all photos are Universal Dental's own. */
export default function ImageCredits() {
  if (imageCredits.length === 0) return null;

  return (
    <div className="border-t border-line bg-surface">
      <Container>
        <details className="group py-5 text-xs text-muted">
          <summary className="cursor-pointer list-none hover:text-foreground [&::-webkit-details-marker]:hidden">
            Placeholder photography credits
          </summary>
          <ul className="mt-3 space-y-1.5">
            {imageCredits.map((c) => (
              <li key={c.file}>
                {c.subject}, by {c.author}.{" "}
                <a href={c.source} className="underline hover:text-foreground">
                  Source
                </a>
                ,{" "}
                <a href={c.licenseUrl} className="underline hover:text-foreground">
                  {c.license}
                </a>
                .
              </li>
            ))}
          </ul>
        </details>
      </Container>
    </div>
  );
}
