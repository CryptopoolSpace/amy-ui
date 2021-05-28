import React from "react";
import clsx from "clsx";
import css from "./Layout.module.scss";

export type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export type LayoutSidebarProps = {
  children: React.ReactNode;
  className?: string;
};

export type LayoutMainProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ className, children }: LayoutProps): JSX.Element => {
  return <div className={clsx(css.Layout, className)}>{children}</div>;
};

const LayoutSidebar = ({ className, children }: LayoutSidebarProps): JSX.Element => {
  return <aside className={clsx(css.Layout__sidebar, className)}>{children}</aside>;
};

const LayoutMain = ({ className, children }: LayoutMainProps): JSX.Element => {
  return <main className={clsx(css.Layout__main, className)}>{children}</main>;
};

Layout.Sidebar = LayoutSidebar;
Layout.Main = LayoutMain;

export default Layout;
