import React from "react";
import clsx from "clsx";
import useOutsideClickDetector from "@hooks/useOutsideClickDetector";
import truncateAddress from "@utils/truncateAddress";
import Button from "../Button";
import css from "./WalletDropdown.module.scss";

export type WalletDropdownProps = {
  address: string;
  status: "connected" | "disconnected" | "connecting";
  children: React.ReactNode;
  className?: string;
};

export type WalletDropdownMenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const DropdownContext = React.createContext({ isOpen: false, setIsOpen: undefined });

const WalletDropdown = ({
  address,
  status,
  className,
  children
}: WalletDropdownProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  useOutsideClickDetector(ref.current, isOpen, () => setIsOpen(false));

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={clsx(css.WalletDropdown, isOpen && css.isOpen, className)} ref={ref}>
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          <span className={clsx(css.WalletDropdown__indicator, css[status])} />
          {truncateAddress(address)}
        </Button>
        <div className={css.WalletDropdown__menu}>{children}</div>
      </div>
    </DropdownContext.Provider>
  );
};

const WalletDropdownMenuItem = ({ onClick, children }: WalletDropdownMenuItemProps) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);

  const handleClick = () => {
    if (!onClick) return;
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button className={css.WalletDropdownMenuItem} onClick={handleClick}>
      {children}
    </button>
  );
};

WalletDropdown.MenuItem = WalletDropdownMenuItem;

export default WalletDropdown;
