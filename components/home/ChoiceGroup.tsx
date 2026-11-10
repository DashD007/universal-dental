import { cn } from "@/lib/cn";

type ChoiceGroupProps = {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  error?: string;
};

/** Radio buttons styled as pill chips, inside a labelled fieldset. */
export default function ChoiceGroup({ name, legend, options, defaultValue, error }: ChoiceGroupProps) {
  const errorId = `${name}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              className="peer sr-only"
            />
            <span
              className={cn(
                "inline-flex h-11 items-center rounded-control border px-4 text-sm transition-colors",
                "border-foreground/20 hover:border-foreground/50",
                "peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary",
                "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary",
              )}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
