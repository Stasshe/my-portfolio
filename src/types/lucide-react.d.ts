declare module "lucide-react" {
  import type { SVGProps } from "react";

  export type IconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  };

  export const ArrowLeft: (props: IconProps) => JSX.Element;
  export const ArrowRight: (props: IconProps) => JSX.Element;
  export const ArrowUpRight: (props: IconProps) => JSX.Element;
  export const Menu: (props: IconProps) => JSX.Element;
  export const X: (props: IconProps) => JSX.Element;
}