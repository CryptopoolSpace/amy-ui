import React from "react";
export declare type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};
export declare type LayoutSidebarProps = {
  children: React.ReactNode;
  className?: string;
};
export declare type LayoutMainProps = {
  children: React.ReactNode;
  className?: string;
};
declare const Layout: {
  ({ className, children }: LayoutProps): JSX.Element;
  Sidebar: ({ className, children }: LayoutSidebarProps) => JSX.Element;
  Main: ({ className, children }: LayoutMainProps) => JSX.Element;
};
export default Layout;
