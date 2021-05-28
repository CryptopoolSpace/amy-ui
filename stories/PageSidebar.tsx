import React from "react";
import { Sidebar } from "../src";

const PageSidebar = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState("dashboard");

  return (
    <Sidebar>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "dashboard"}
        onClick={() => setActiveTab("dashboard")}
      >
        Dashboard
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "assemblyPool"}
        onClick={() => setActiveTab("assemblyPool")}
      >
        Assembly Pool
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "borrow"}
        onClick={() => setActiveTab("borrow")}
      >
        Borrow
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "marginTrading"}
        onClick={() => setActiveTab("marginTrading")}
      >
        Margin Trading
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "spotTrading"}
        onClick={() => setActiveTab("spotTrading")}
      >
        Spot Trading
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "farm"}
        onClick={() => setActiveTab("farm")}
      >
        Farm
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "governance"}
        onClick={() => setActiveTab("governance")}
      >
        Governance
      </Sidebar.NavButton>
      <Sidebar.NavButton
        icon="info"
        isActive={activeTab === "operationHistory"}
        onClick={() => setActiveTab("operationHistory")}
      >
        Operation History
      </Sidebar.NavButton>
    </Sidebar>
  );
};

export default PageSidebar;
