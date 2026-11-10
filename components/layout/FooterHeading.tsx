export default function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-eyebrow font-semibold uppercase text-highlight">{children}</h2>
  );
}
