import React from "react";
import { Toggle } from "rsuite";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div>
      <div className="d-flex ">
        <div>
          <div>
            <LeftSidebar
              expanded={expanded}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </div>
        </div>
        <div style={{ position: "relative" }} className="w-100">
          <span style={{ position: "absolute", top: "5px", left: "5px" }}>
            <Toggle
              onChange={setExpanded}
              checked={expanded}
              checkedChildren="Expand"
              unCheckedChildren="Collapse"
            />
          </span>
          <div>
            <Topbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
