import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/lib/ui/button";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

/** <button> with design-system styles. For navigation use ButtonLink. */
export default function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}
