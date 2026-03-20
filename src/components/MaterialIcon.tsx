import { cn } from "@/lib/utils";

interface MaterialIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number;
  fill?: boolean;
}

const MaterialIcon = ({ name, size = 24, fill = false, className, style, ...props }: MaterialIconProps) => {
  return (
    <span
      className={cn(
        "material-symbols-outlined select-none inline-flex items-center justify-center leading-none",
        className
      )}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
        width: size,
        height: size,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
