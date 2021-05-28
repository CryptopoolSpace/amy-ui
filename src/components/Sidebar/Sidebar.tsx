import React from "react";
import clsx from "clsx";
import Icon from "../Icon";
import Logo from "@images/logo.svg";
import css from "./Sidebar.module.scss";

export type SidebarProps = {
  children: React.ReactNode;
  onLogoClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export type SidebarNavButtonProps = {
  icon: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Sidebar = ({ className, onLogoClick, children }: SidebarProps): JSX.Element => {
  return (
    <aside className={clsx(css.Sidebar, className)}>
      <button className={css.Sidebar__logo} onClick={onLogoClick}>
        <Logo width={168} height={56} />
      </button>
      <nav className={css.Sidebar__nav}>{children}</nav>
    </aside>
  );
};

const SidebarNavButton = ({
  icon,
  isActive,
  onClick,
  children
}: SidebarNavButtonProps): JSX.Element => {
  return (
    <button className={clsx(css.SidebarButton, isActive && css.active)} onClick={onClick}>
      <Icon name={icon} size={20} className={css.SidebarButton__icon} />
      {children}
    </button>
  );
};

Sidebar.NavButton = SidebarNavButton;

export default Sidebar;
