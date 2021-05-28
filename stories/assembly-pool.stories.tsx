/* eslint "@typescript-eslint/no-explicit-any": "off" */ // [TODO] fix types
import React from "react";
import {
  AmountGroupButton,
  Button,
  Container,
  ExpandedRow,
  InputBox,
  Layout,
  Panel,
  Table,
  TableHeader,
  TableTooltipHeader,
  TableBlankHeader,
  TableCell,
  TableAmountCell,
  TableAPRCell,
  TableStatusCell,
  TableButtonGroupCell,
  TableButton,
  Text
} from "../src";
import PageSidebar from "./PageSidebar";
import PageMainNavigationBar from "./PageMainNavigationBar";

export default {
  title: "Page Examples/Assembly Pool",
  parameters: { options: { showPanel: false } }
};

const ControllerCell = ({ row }: any) => {
  // const data = row.original;

  return (
    <TableButtonGroupCell>
      <TableButton expandTrigger isExpanded={row.isExpanded} {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? "Close" : "Stake / Unstake"}
      </TableButton>
    </TableButtonGroupCell>
  );
};

export const Default = (): any => {
  const columns = React.useMemo(
    () => [
      { title: "Token", accessor: "token", Header: TableHeader, Cell: TableCell },
      {
        title: "Available Balance",
        accessor: "availableBalance",
        Header: TableHeader,
        Cell: TableAmountCell
      },
      {
        title: "Stake Balance",
        accessor: "stakeBalance",
        Header: TableHeader,
        Cell: TableAmountCell
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
        title: "Pool Status",
        accessor: "status",
        Header: TableHeader,
        Cell: TableStatusCell
      },
      { accessor: "control", Header: TableBlankHeader, Cell: ControllerCell }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        token: "ETH",
        availableBalance: { amount: 120 },
        stakeBalance: { amount: 25 },
        aprs: ["24.50%", "2.04%", "0.068%"],
        status: {
          userPosition: 33,
          availableLiquidity: 32
        }
      },
      {
        token: "USDT",
        availableBalance: { amount: 185000 },
        stakeBalance: { amount: 52500 },
        aprs: ["18.75%", "1.56%", "0.052%"],
        status: {
          userPosition: 12,
          availableLiquidity: 24
        }
      },
      {
        token: "WBTC",
        availableBalance: { amount: 10 },
        stakeBalance: { amount: 5 },
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
        <ExpandedRow.DiagramPane>Diagram</ExpandedRow.DiagramPane>
        <ExpandedRow.TabsPane>
          <ExpandedRow.TabContent label="Stake">
            <InputBox
              label="How much would you like to stake?"
              description="Available Balance: 120 ETH"
              unit="ETH"
              defaultValue={0}
              onChange={(value) => console.log(value)}
            />
            <AmountGroupButton customRate={0} onClick={(rate) => console.log(rate)} />
            <Button fluid>Stack</Button>
          </ExpandedRow.TabContent>
          <ExpandedRow.TabContent label="Unstake">
            <InputBox
              label="How much would you like to unstake?"
              description="Stake Balance: 120 ETH"
              unit="ETH"
              defaultValue={0}
              onChange={(value) => console.log(value)}
            />
            <AmountGroupButton customRate={0} onClick={(rate) => console.log(rate)} />
            <Button fluid>Unstack</Button>
          </ExpandedRow.TabContent>
        </ExpandedRow.TabsPane>
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
            Assembly Pool
          </Text>
          <Panel>
            <Table columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
          </Panel>
        </Container>
      </Layout.Main>
    </Layout>
  );
};
