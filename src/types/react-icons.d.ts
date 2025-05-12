declare module 'react-icons/ri' {
  import { IconType } from 'react-icons';
  
  export const RiHome2Line: IconType;
  export const RiUserLine: IconType;
  export const RiMailLine: IconType;
}

declare module 'react-icons' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;
} 