export default function StyledText({ children, separator, as, className }) {
  if (typeof children !== "string") return "";
  const splittedText = children.split(separator);
  const Component = as || "p";
  return (
    <Component className={className}>
      {splittedText[0]}
      {separator && (
        <span className="font-serif font-medium text-red-400">{separator}</span>
      )}
      {splittedText[1]}
    </Component>
  );
}
