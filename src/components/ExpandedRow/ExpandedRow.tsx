import React from "react";
import clsx from "clsx";
import css from "./ExpandedRow.module.scss";

export type ExpandedRowProps = {
  children: React.ReactNode;
  className?: string;
};

export type ExpandedRowDiagramPaneProps = {
  children: React.ReactNode;
};

export type ExpandedRowTabsPaneProps = {
  children: React.ReactNode;
};

export type ExpandedRowTabContentProps = {
  label: string;
  children: React.ReactNode;
};

export type ExpandedRowPaneProps = {
  children: React.ReactNode;
};

const ExpandedRow = ({ className, children }: ExpandedRowProps): JSX.Element => {
  return <div className={clsx(css.ExpandedRow, className)}>{children}</div>;
};

const ExpandedRowDiagramPane = ({ children }: ExpandedRowDiagramPaneProps): JSX.Element => {
  return <div className={css.DiagramPane}>{children}</div>;
};

const ExpandedRowTabsPane = ({ children }: ExpandedRowTabsPaneProps): JSX.Element => {
  const labels: string[] = React.Children.map(children, (i: JSX.Element) => i.props.label);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const renderTabContent = React.useCallback(() => {
    return React.Children.map(children, (i: JSX.Element) => (
      <div className={css.TabContent}>{React.cloneElement(i)}</div>
    ));
  }, [children]);

  const tabsCount = React.useMemo(() => React.Children.count(children), [children]);

  return (
    <div className={css.TabPane}>
      <div className={css.TabPane__labelGroup}>
        {labels.map((i, idx) => (
          <button
            key={`id-${i}`}
            className={clsx(css.TabPane__label, idx === activeTabIndex && css.active)}
            onClick={() => setActiveTabIndex(idx)}
          >
            {i}
          </button>
        ))}
      </div>
      <div className={clsx(css.TabPane__content)}>
        <div
          className={css.TabContentGroup}
          style={{
            width: `${100 * tabsCount}%`,
            transform: `translateX(${(1 / tabsCount) * activeTabIndex * -100}%)`
          }}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const ExpandedRowTabContent = ({ children }: ExpandedRowTabContentProps): JSX.Element => {
  return <>{children}</>;
};

const ExpandedRowPane = ({ children }: ExpandedRowPaneProps): JSX.Element => {
  return <div className={css.Pane}>{children}</div>;
};

ExpandedRow.DiagramPane = ExpandedRowDiagramPane;
ExpandedRow.TabsPane = ExpandedRowTabsPane;
ExpandedRow.TabContent = ExpandedRowTabContent;
ExpandedRow.Pane = ExpandedRowPane;

export default ExpandedRow;
