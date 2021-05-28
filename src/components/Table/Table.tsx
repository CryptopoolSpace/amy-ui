/* eslint "@typescript-eslint/no-explicit-any": "off" */ // [TODO] fix types
import React from "react";
import clsx from "clsx";
import { useTable, useExpanded } from "react-table";
// import { useTable, useExpanded } from "react-table/dist/react-table.production.min.js";
import { UnmountClosed } from "react-collapse";
import formatNumber from "@utils/formatNumber";
import Label from "../Label";
import Tooltip from "../Tooltip";
import css from "./Table.module.scss";

export type TableProps = {
  columns: any;
  data: any;
  renderRowSubComponent?: (args: any) => React.ReactNode;
  className?: string;
};

type TableHeaderProps = {
  column: any;
};

type TableTooltipHeaderProps = {
  column: any;
};

type TableCellProps = {
  value: string;
};

type TableAmountCellProps = {
  value: {
    amount: number;
    unit?: string;
  };
};

type TableAPRCellProps = {
  value: string[];
};

type TableLabelCellProps = {
  value: {
    icon: string;
    label: string;
    color: "green" | "red";
  };
};

type TableButtonGroupCellProps = {
  children: React.ReactNode;
};

type TableStatusCellProps = {
  value: {
    userPosition: number;
    availableLiquidity: number;
  };
};

type TableButtonProps = {
  onClick: () => void;
  children: string;
  expandTrigger?: boolean;
  isExpanded?: boolean;
  disabled?: boolean;
};

const TableHeader = ({ column }: TableHeaderProps): JSX.Element => {
  return <th>{column.title}</th>;
};

const TableTooltipHeader = ({ column }: TableTooltipHeaderProps): JSX.Element => {
  return (
    <th>
      {column.title}
      <Tooltip
        icon={column.tooltip.icon}
        content={column.tooltip.content}
        className={css.tableTooltipIcon}
      />
    </th>
  );
};

const TableBlankHeader = (): JSX.Element => {
  return <th />;
};

const TableCell = ({ value }: TableCellProps): JSX.Element => {
  return <td>{value}</td>;
};

const TableAmountCell = ({ value }: TableAmountCellProps): JSX.Element => {
  const amount = formatNumber(value.amount);
  const unit = value.unit ? ` ${value.unit}` : "";
  return <td>{amount + unit}</td>;
};

const TableAPRCell = ({ value }: TableAPRCellProps): JSX.Element => {
  return (
    <td>
      {value.map((i, idx) => (
        <Label key={`id-${i}-${idx}`} className={css.APRLabel}>
          {i}
        </Label>
      ))}
    </td>
  );
};

const TableLabelCell = ({ value }: TableLabelCellProps): JSX.Element => {
  return (
    <td>
      <Label icon={value.icon} color={value.color}>
        {value.label}
      </Label>
    </td>
  );
};

const TableStatusCell = ({ value }: TableStatusCellProps): JSX.Element => {
  return (
    <td>
      <div className={css.StatusBar}>
        <span className={css.StatusBar__userPosition} style={{ width: `${value.userPosition}%` }} />
        <span
          className={css.StatusBar__availableLiquidity}
          style={{ width: `${value.availableLiquidity}%` }}
        />
      </div>
    </td>
  );
};

const TableButtonGroupCell = ({ children }: TableButtonGroupCellProps): JSX.Element => {
  return <td className={css.TableButtonGroupCell}>{children}</td>;
};

const TableButton = ({
  onClick,
  expandTrigger,
  isExpanded,
  disabled,
  children
}: TableButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        css.TableButton,
        expandTrigger && css["TableButton--expandTrigger"],
        isExpanded && css.isExpanded
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Table = ({ columns, data, renderRowSubComponent, className }: TableProps): JSX.Element => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow, visibleColumns } = useTable(
    {
      columns,
      data,
      stateReducer: (state: any, action) => {
        if (action.type === "toggleRowExpanded") {
          state.expanded = { [action.id]: !!state.expanded[action.id] };
        }
        return state;
      }
    },
    useExpanded
  );

  return (
    <table className={clsx(css.Table, className)} {...getTableProps()}>
      <thead>
        <tr>{headers.map((column) => column.render("Header", { ...column.getHeaderProps() }))}</tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);

          if (renderRowSubComponent) {
            return (
              <React.Fragment key={row.getRowProps().key}>
                <tr>{row.cells.map((cell) => cell.render("Cell", { ...cell.getCellProps() }))}</tr>
                <tr className={clsx(css.expandedRow, row.isExpanded && css.isOpen)}>
                  <td className={css.expandedCell} colSpan={visibleColumns.length}>
                    <UnmountClosed isOpened={row.isExpanded}>
                      {renderRowSubComponent(row.original)}
                    </UnmountClosed>
                  </td>
                </tr>
              </React.Fragment>
            );
          }

          /* eslint-disable react/jsx-key */
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => cell.render("Cell", { ...cell.getCellProps() }))}
            </tr>
          );
          /* eslint-enable react/jsx-key */
        })}
      </tbody>
    </table>
  );
};

export default Table;
export {
  TableHeader,
  TableTooltipHeader,
  TableBlankHeader,
  TableCell,
  TableAmountCell,
  TableAPRCell,
  TableLabelCell,
  TableStatusCell,
  TableButtonGroupCell,
  TableButton
};
