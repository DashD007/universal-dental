import { cn } from "@/lib/cn";

type TextFieldProps = {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  defaultValue?: string;
  multiline?: boolean;
  optional?: boolean;
  type?: "text" | "tel" | "email";
  autoComplete?: string;
  placeholder?: string;
  className?: string;
};

const control =
  "w-full border border-foreground/20 bg-background px-4 text-base text-foreground transition-colors " +
  "placeholder:text-muted hover:border-foreground/40 focus-visible:border-primary " +
  "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary " +
  "aria-invalid:border-danger";

export default function TextField({
  name,
  label,
  hint,
  error,
  defaultValue,
  multiline = false,
  optional = false,
  type = "text",
  autoComplete,
  placeholder,
  className,
}: TextFieldProps) {
  const id = `field-${name}`;
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 text-sm font-medium">
        {label}
        {optional ? <span className="text-xs font-normal text-muted">Optional</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          defaultValue={defaultValue}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(control, "mt-2 block min-h-32 resize-y rounded-media py-3")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(control, "mt-2 block h-12 rounded-control")}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
