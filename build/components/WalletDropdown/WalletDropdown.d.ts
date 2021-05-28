import React from "react";
export declare type WalletDropdownProps = {
  address: string;
  status: "connected" | "disconnected" | "connecting";
  children: React.ReactNode;
  className?: string;
};
export declare type WalletDropdownMenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
declare const WalletDropdown: {
  ({ address, status, className, children }: WalletDropdownProps): JSX.Element;
  MenuItem: ({ onClick, children }: WalletDropdownMenuItemProps) => JSX.Element;
};
export default WalletDropdown;
