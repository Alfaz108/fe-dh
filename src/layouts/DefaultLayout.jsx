import React from "react";
import "./../App.css";
import { Toggle } from "rsuite";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@rsuite/icons/Menu";

const DefaultLayout = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  const buttonFunction = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="d-flex h-100">
      <LeftSidebar
        expanded={expanded}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        style={{ backgroundColor: "#FFFFFF !important" }}
      />
      <div className="flex-grow-1 d-flex flex-column">
        <div className="position-relative">
          <span
            style={{
              position: "absolute",
              top: "14px",
              left: "7px",
              cursor: "pointer",
            }}
            onClick={buttonFunction}
          >
            <MenuIcon style={{ width: "30px", fontSize: "18px" }} />
          </span>
          <Topbar />
        </div>
        <div className="flex-grow-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
