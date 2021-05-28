import React from "react";
import { MainNavigationBar, WalletDropdown } from "../src";

const PageMainNavigationBar = (): JSX.Element => {
  const [status, setState] =
    React.useState<"connected" | "disconnected" | "connecting">("connected");

  return (
    <MainNavigationBar>
      <WalletDropdown status={status} address="0xA232152166DF4c82D9aFa123F358b1467098abDD">
        <WalletDropdown.MenuItem
          onClick={() => setState(status === "connected" ? "disconnected" : "connected")}
        >
          {status === "connected" ? "Discount" : "Connect"} Wallet
        </WalletDropdown.MenuItem>
      </WalletDropdown>
    </MainNavigationBar>
  );
};

export default PageMainNavigationBar;
