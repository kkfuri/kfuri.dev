import classnames from "classnames";

const variants = {
  primary: ["bg-black", "text-white"].join(" "),
  secondary: ["border", "border-gray-200", "bg-white", "text-black"].join(" "),
  none: "",
};

const sizes = {
  lg: ["px-4", "py-2"].join(" "),
  md: ["px-2", "py-1"].join(" "),
  sm: ["p-1"].join(" "),
  none: "",
};

export default function Button({
  children,
  className,
  variant = "none",
  size = "none",
  ...props
}) {
  return (
    <button
      className={classnames(variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
