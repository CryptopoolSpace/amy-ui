/* eslint "@typescript-eslint/no-explicit-any": "off" */ // [TODO] fix types
import React from "react";
import {
  AmountGroupButton,
  Button,
  Container,
  ExpandedRow,
  InputBox,
  InputMaxAddon,
  Layout,
  Panel,
  Table,
  TableHeader,
  TableTooltipHeader,
  TableBlankHeader,
  TableCell,
  TableAmountCell,
  TableAPRCell,
  TableButtonGroupCell,
  TableButton,
  Text
} from "../src";
import PageSidebar from "./PageSidebar";
import PageMainNavigationBar from "./PageMainNavigationBar";

export default {
  title: "Page Examples/Farm",
  parameters: { options: { showPanel: false } }
};

const ControllerCell = ({ row }: any) => {
  // const data = row.original;

  return (
    <TableButtonGroupCell>
      <TableButton expandTrigger isExpanded={row.isExpanded} {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? "Close" : "Farm control"}
      </TableButton>
    </TableButtonGroupCell>
  );
};

export const Default = (): any => {
  const columns = React.useMemo(
    () => [
      {
        title: "Farm",
        tooltip: {
          content: "Tooltip content."
        },
        accessor: "farm",
        Header: TableTooltipHeader,
        Cell: TableCell
      },
      {
        title: "Yearly / Monthly / Daily APR%",
        tooltip: {
          content: "Tooltip content."
        },
        accessor: "aprs",
        Header: TableTooltipHeader,
        Cell: TableAPRCell
      },
      {
        title: "Your Staked",
        accessor: "yourStaked",
        Header: TableHeader,
        Cell: TableAmountCell
      },
      {
        title: "Total Staked",
        accessor: "totalStaked",
        Header: TableHeader,
        Cell: TableAmountCell
      },
      { accessor: "control", Header: TableBlankHeader, Cell: ControllerCell }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        farm: "ETH",
        yourStaked: { amount: 120, unit: "ETH" },
        totalStaked: { amount: 25, unit: "apETH" },
        aprs: ["24.50%", "2.04%", "0.068%"],
        status: {
          userPosition: 33,
          availableLiquidity: 32
        }
      },
      {
        farm: "USDT",
        yourStaked: { amount: 185000, unit: "ETH" },
        totalStaked: { amount: 52500, unit: "apUSDT" },
        aprs: ["18.75%", "1.56%", "0.052%"],
        status: {
          userPosition: 12,
          availableLiquidity: 24
        }
      },
      {
        farm: "WBTC",
        yourStaked: { amount: 10, unit: "ETH" },
        totalStaked: { amount: 5, unit: "apWBTC" },
        aprs: ["12.50%", "1.04%", "0.035%"],
        status: {
          userPosition: 30,
          availableLiquidity: 40
        }
      }
    ],
    []
  );

  const renderRowSubComponent = React.useCallback((data) => {
    console.log(data);

    return (
      <ExpandedRow>
        <ExpandedRow.Pane>
          <Text variant="h3" color="textPrimary">
            Farm
          </Text>
          <InputBox
            label="How much would you like to farm?"
            description="Available Balance: 120 ETH"
            unit="ETH"
            defaultValue={0}
            onChange={(value) => console.log(value)}
            AddonComponent={<InputMaxAddon onClick={() => console.log("max clicked")} />}
          />
          <AmountGroupButton customRate={0} onClick={(rate) => console.log(rate)} />
          <Button fluid>Farm</Button>
        </ExpandedRow.Pane>
        <ExpandedRow.Pane>
          <Text variant="h3" color="textPrimary">
            Unfarm
          </Text>
          <InputBox
            label="How much would you like to unfarm?"
            description="Available Balance: 120 ETH"
            unit="ETH"
            defaultValue={0}
            onChange={(value) => console.log(value)}
            AddonComponent={<InputMaxAddon onClick={() => console.log("max clicked")} />}
          />
          <AmountGroupButton customRate={0} onClick={(rate) => console.log(rate)} />
          <Button fluid>Unfarm</Button>
        </ExpandedRow.Pane>
        <ExpandedRow.Pane>
          <Text variant="h3" color="textPrimary">
            Claim
          </Text>
          <InputBox
            label="How much would you like to claim?"
            description="Available Balance: 120 ETH"
            unit="ETH"
            defaultValue={0}
            onChange={(value) => console.log(value)}
            AddonComponent={<InputMaxAddon onClick={() => console.log("max clicked")} />}
          />
          <AmountGroupButton customRate={0} onClick={(rate) => console.log(rate)} />
          <Button color="green" fluid>
            Claim
          </Button>
        </ExpandedRow.Pane>
      </ExpandedRow>
    );
  }, []);

  return (
    <Layout>
      <Layout.Sidebar>
        <PageSidebar />
      </Layout.Sidebar>
      <Layout.Main>
        <Container>
          <PageMainNavigationBar />
          <Text font="serif" variant="h1" color="textPrimary">
            Farm
          </Text>
          <Panel>
            <Table columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
          </Panel>
        </Container>
      </Layout.Main>
    </Layout>
  );
};
