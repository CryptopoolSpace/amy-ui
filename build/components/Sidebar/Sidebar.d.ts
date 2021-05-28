import React from "react";
export declare type SidebarProps = {
  children: React.ReactNode;
  onLogoClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
export declare type SidebarNavButtonProps = {
  icon: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Sidebar: {
  ({ className, onLogoClick, children }: SidebarProps): JSX.Element;
  NavButton: ({ icon, isActive, onClick, children }: SidebarNavButtonProps) => JSX.Element;
};
export default Sidebar;
