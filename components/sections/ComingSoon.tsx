import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

// TEMPORARY: placeholder body for pages whose sections are not built yet.
export default function ComingSoon({ sections }: { sections: string[] }) {
  return (
    <section className="py-section-sm">
      <Container>
        <Card variant="outline" className="border-dashed">
          <p className="text-eyebrow font-semibold uppercase text-muted">In the workshop</p>
          <p className="mt-3 text-display-sm font-medium">Sections planned for this page</p>
          <ol className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
        </Card>
      </Container>
    </section>
  );
}
