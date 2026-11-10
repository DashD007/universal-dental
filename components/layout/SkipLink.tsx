/** First focusable element: lets keyboard users jump past the header. */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-control bg-primary px-5 py-3 text-sm font-medium text-on-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
    >
      Skip to content
    </a>
  );
}
