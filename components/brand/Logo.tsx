import LogoMark from "@/components/brand/LogoMark";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Larger lockup for heroes and brand pages. */
  size?: "md" | "lg";
};

/** Mark + wordmark. Text inherits the current color, so it works on light and moss backgrounds. */
export default function Logo({ className, size = "md" }: LogoProps) {
  const large = size === "lg";

  return (
    <span className={cn("inline-flex items-center", large ? "gap-2.5" : "gap-1.5", className)}>
      {/* Mark height = wordmark block height (md 36px, lg 70px), so both read as one unit */}
      <LogoMark className={large ? "h-17.5 w-auto" : "h-9 w-auto"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans font-semibold tracking-tight",
            large ? "text-5xl" : "text-[1.4rem]",
          )}
        >
          Universal
        </span>
        <span
          className={cn(
            "font-sans font-medium uppercase opacity-70",
            large ? "mt-2 text-sm tracking-[0.42em]" : "mt-1 text-[0.62rem] tracking-[0.34em]",
          )}
        >
          Dental
        </span>
      </span>
    </span>
  );
}
