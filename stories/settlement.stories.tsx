/* eslint "@typescript-eslint/no-explicit-any": "off" */ // [TODO] fix types
import React from "react";
import {
  Container,
  Layout,
  Panel,
  Table,
  TableHeader,
  TableTooltipHeader,
  TableCell,
  TableLabelCell,
  TableButtonGroupCell,
  TableButton,
  Text
} from "../src";
import PageSidebar from "./PageSidebar";
import PageMainNavigationBar from "./PageMainNavigationBar";

export default {
  title: "Page Examples/Settlement",
  parameters: { options: { showPanel: false } }
};

const ControllerCell = ({ row }: any) => {
  console.log(row.original);

  return (
    <TableButtonGroupCell>
      <TableButton onClick={() => console.log("Clicked Liquidate")}>Liquidate</TableButton>
    </TableButtonGroupCell>
  );
};

export const Default = (): any => {
  const columns = React.useMemo(
    () => [
      { title: "ID", accessor: "id", Header: TableHeader, Cell: TableCell },
      {
        title: "Pool",
        accessor: "pool",
        Header: TableHeader,
        Cell: TableCell
      },
      {
        title: "Position Value",
        accessor: "positionValue",
        Header: TableHeader,
        Cell: TableCell
      },
      {
        title: "Total Debt",
        accessor: "totalDebt",
        Header: TableHeader,
        Cell: TableCell
      },
      {
        title: "Kill Factor",
        accessor: "killFactor",
        Header: TableHeader,
        Cell: TableCell
      },
      {
        title: "Debt Ratio",
        accessor: "debtRatio",
        Header: TableHeader,
        Cell: TableCell
      },
      {
        title: "Kill Buffer",
        tooltip: {
          content: "Tooltip content."
        },
        accessor: "killBuffer",
        Header: TableTooltipHeader,
        Cell: TableLabelCell
      },
      {
        title: "Liquidate Position",
        accessor: "control",
        Header: TableHeader,
        Cell: ControllerCell
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "6023",
        pool: "ETH / USDT",
        positionValue: "64.19",
        totalDebt: "50.050",
        killFactor: "80.00%",
        debtRatio: "76.60%",
        killBuffer: {
          label: "3.40%",
          color: "green",
          icon: "plus"
        }
      },
      {
        id: "3530",
        pool: "ETH / USDT",
        positionValue: "1.36",
        totalDebt: "1.038",
        killFactor: "80.00%",
        debtRatio: "76.60%",
        killBuffer: {
          label: "3.40%",
          color: "green",
          icon: "plus"
        }
      },
      {
        id: "6431",
        pool: "ETH / USDT",
        positionValue: "2.65",
        totalDebt: "2.005",
        killFactor: "80.00%",
        debtRatio: "75.77%",
        killBuffer: {
          label: "3.40%",
          color: "red",
          icon: "minus"
        }
      },
      {
        id: "6860",
        pool: "ETH / USDT",
        positionValue: "164.00",
        totalDebt: "122.860",
        killFactor: "80.00%",
        debtRatio: "74.60%",
        killBuffer: {
          label: "3.40%",
          color: "red",
          icon: "minus"
        }
      }
    ],
    []
  );

  return (
    <Layout>
      <Layout.Sidebar>
        <PageSidebar />
      </Layout.Sidebar>
      <Layout.Main>
        <Container>
          <PageMainNavigationBar />
          <Text font="serif" variant="h1" color="textPrimary">
            Settlement
          </Text>
          <Panel>
            <Table columns={columns} data={data} />
          </Panel>
        </Container>
      </Layout.Main>
    </Layout>
  );
};
