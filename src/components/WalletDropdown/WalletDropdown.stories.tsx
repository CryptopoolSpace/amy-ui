import { Story, Meta } from "@storybook/react";
import MainNavigationBar from "../MainNavigationBar";
import WalletDropdown, { WalletDropdownProps } from "./WalletDropdown";

const Template: Story<WalletDropdownProps> = (args) => (
  <MainNavigationBar>
    <WalletDropdown {...args}>
      <WalletDropdown.MenuItem onClick={() => console.log("clicked")}>
        Discount Wallet
      </WalletDropdown.MenuItem>
    </WalletDropdown>
  </MainNavigationBar>
);

export default {
  title: "Components/WalletDropdown",
  component: WalletDropdown,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  address: "0xA232152166DF4c82D9aFa123F358b1467098abDD",
  status: "disconnected"
};
