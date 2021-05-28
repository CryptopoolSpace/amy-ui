import React from "react";
export declare type TableProps = {
  columns: any;
  data: any;
  renderRowSubComponent?: (args: any) => React.ReactNode;
  className?: string;
};
declare type TableHeaderProps = {
  column: any;
};
declare type TableTooltipHeaderProps = {
  column: any;
};
declare type TableCellProps = {
  value: string;
};
declare type TableAmountCellProps = {
  value: {
    amount: number;
    unit?: string;
  };
};
declare type TableAPRCellProps = {
  value: string[];
};
declare type TableLabelCellProps = {
  value: {
    icon: string;
    label: string;
    color: "green" | "red";
  };
};
declare type TableButtonGroupCellProps = {
  children: React.ReactNode;
};
declare type TableStatusCellProps = {
  value: {
    userPosition: number;
    availableLiquidity: number;
  };
};
declare type TableButtonProps = {
  onClick: () => void;
  children: string;
  expandTrigger?: boolean;
  isExpanded?: boolean;
  disabled?: boolean;
};
declare const TableHeader: ({ column }: TableHeaderProps) => JSX.Element;
declare const TableTooltipHeader: ({ column }: TableTooltipHeaderProps) => JSX.Element;
declare const TableBlankHeader: () => JSX.Element;
declare const TableCell: ({ value }: TableCellProps) => JSX.Element;
declare const TableAmountCell: ({ value }: TableAmountCellProps) => JSX.Element;
declare const TableAPRCell: ({ value }: TableAPRCellProps) => JSX.Element;
declare const TableLabelCell: ({ value }: TableLabelCellProps) => JSX.Element;
declare const TableStatusCell: ({ value }: TableStatusCellProps) => JSX.Element;
declare const TableButtonGroupCell: ({ children }: TableButtonGroupCellProps) => JSX.Element;
declare const TableButton: ({
  onClick,
  expandTrigger,
  isExpanded,
  disabled,
  children
}: TableButtonProps) => JSX.Element;
declare const Table: ({
  columns,
  data,
  renderRowSubComponent,
  className
}: TableProps) => JSX.Element;
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
