import React from "react";
import ChevronDownIcon from "@icons/chevron-down.svg";
import ChevronRightIcon from "@icons/chevron-right.svg";
import CrossIcon from "@icons/cross.svg";
import InfoIcon from "@icons/info.svg";
import MinusIcon from "@icons/minus.svg";
import PlusIcon from "@icons/plus.svg";

const IconsEnum = {
  "chevron-down": ChevronDownIcon,
  "chevron-right": ChevronRightIcon,
  cross: CrossIcon,
  info: InfoIcon,
  minus: MinusIcon,
  plus: PlusIcon
};

export type IconProps = {
  name: string;
  width?: number;
  height?: number;
  size?: number;
  className?: string;
};

const Icon = ({ name, width, height, size, className }: IconProps): JSX.Element => {
  const IconComponent = IconsEnum[name];
  if (!IconComponent) return null;
  const _width = width || size || 16;
  const _height = height || size || 16;
  return <IconComponent width={_width} height={_height} className={className} />;
};

export default Icon;
