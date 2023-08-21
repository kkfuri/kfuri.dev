import classnames from "classnames";

const variants = {
  primary: "bg-gray-800 text-gray-50",
  secondary: "border border-gray-200 bg-gray-50 text-gray-800",
  none: "",
};

const sizes = {
  lg: "px-4 py-2",
  md: "px-2 py-1",
  sm: "p-1",
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
