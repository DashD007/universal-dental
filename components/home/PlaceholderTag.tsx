/** Marks content that must be replaced with real material before launch. */
export default function PlaceholderTag({ children = "Placeholder" }: { children?: React.ReactNode }) {
  return (
    <span className="rounded-control bg-brass-200 px-2.5 py-1 text-xs font-medium text-earth-900">
      {children}
    </span>
  );
}
