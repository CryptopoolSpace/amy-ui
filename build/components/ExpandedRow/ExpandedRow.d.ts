import React from "react";
export declare type ExpandedRowProps = {
  children: React.ReactNode;
  className?: string;
};
export declare type ExpandedRowDiagramPaneProps = {
  children: React.ReactNode;
};
export declare type ExpandedRowTabsPaneProps = {
  children: React.ReactNode;
};
export declare type ExpandedRowTabContentProps = {
  label: string;
  children: React.ReactNode;
};
export declare type ExpandedRowPaneProps = {
  children: React.ReactNode;
};
declare const ExpandedRow: {
  ({ className, children }: ExpandedRowProps): JSX.Element;
  DiagramPane: ({ children }: ExpandedRowDiagramPaneProps) => JSX.Element;
  TabsPane: ({ children }: ExpandedRowTabsPaneProps) => JSX.Element;
  TabContent: ({ children }: ExpandedRowTabContentProps) => JSX.Element;
  Pane: ({ children }: ExpandedRowPaneProps) => JSX.Element;
};
export default ExpandedRow;
