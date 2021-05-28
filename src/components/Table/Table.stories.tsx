/* eslint "@typescript-eslint/no-explicit-any": "off" */ // [TODO] fix types
import React from "react";
import { Story, Meta } from "@storybook/react";
import Table, {
  TableProps,
  TableHeader,
  TableTooltipHeader,
  TableBlankHeader,
  TableCell,
  TableAPRCell,
  TableStatusCell,
  TableButtonGroupCell,
  TableButton
} from "./Table";

const ButtonGroupCell = ({ row }: any) => {
  const data = row.original;

  return (
    <TableButtonGroupCell>
      <TableButton onClick={() => console.log(data)}>Button</TableButton>
      <TableButton onClick={() => console.log(data)}>Unstake</TableButton>
      <TableButton {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? "Close" : "Stake"}
      </TableButton>
    </TableButtonGroupCell>
  );
};

const Template: Story<TableProps> = (args) => {
  const columns = React.useMemo(
    () => [
      { title: "Token", accessor: "token", Header: TableHeader, Cell: TableCell },
      {
        title: "APR",
        tooltip: {
          content: "Tooltip content."
        },
        accessor: "apr",
        Header: TableTooltipHeader,
        Cell: TableAPRCell
      },
      {
        title: "Yearly / Monthly / Daily APR%",
        tooltip: {
          content: "Yearly / Monthly / Daily APR%"
        },
        accessor: "aprs",
        Header: TableTooltipHeader,
        Cell: TableAPRCell
      },
      { title: "Stake Balance", accessor: "stakeBalance", Header: TableHeader, Cell: TableCell },
      { title: "Pool Status", accessor: "status", Header: TableHeader, Cell: TableStatusCell },
      { accessor: "control", Header: TableBlankHeader, Cell: ButtonGroupCell }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        token: "apETH",
        apr: ["0.15%"],
        aprs: ["24.50%", "18.75%", "12.50%"],
        stakeBalance: 1234,
        status: {
          userPosition: 33,
          availableLiquidity: 32
        }
      },
      {
        token: "apUSDT",
        apr: ["0.18%"],
        aprs: ["24.50%", "18.75%", "12.50%"],
        stakeBalance: 1234,
        status: {
          userPosition: 12,
          availableLiquidity: 24
        }
      },
      {
        token: "apWBTC",
        apr: ["0.20%"],
        aprs: ["24.50%", "18.75%", "12.50%"],
        stakeBalance: 1234,
        status: {
          userPosition: 30,
          availableLiquidity: 40
        }
      }
    ],
    []
  );

  const renderRowSubComponent = React.useCallback((data) => {
    return (
      <div>
        <ul>
          <li>Token: {data.token}</li>
          <li>APR: {data.apr}</li>
        </ul>
      </div>
    );
  }, []);

  return (
    <Table {...args} columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
  );
};

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
