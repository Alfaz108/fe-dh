import React from "react";
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
    <div style={{ overflowX: "hidden" }} className="d-flex">
      {/* Fixed Left Sidebar */}
      <div style={{ position: "fixed" }}>
        <LeftSidebar
          expanded={expanded}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          style={{
            backgroundColor: "#FFFFFF",
            position: "fixed",
            height: "100vh",
            overflowY: "auto",
          }}
        />
      </div>

      <div className="flex-grow-1 d-flex flex-column dashBoardBackgroundColor">
        {/* Fixed Topbar */}
        <div
          style={{
            position: "static",
            height: "-55px",
            top: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              marginLeft: expanded ? "250px" : "50px",
              transition: "margin-left 0.5s",
            }}
          >
            {/* Toggle Button */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "7px",
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={buttonFunction}
            >
              <MenuIcon style={{ width: "30px", fontSize: "18px" }} />
            </div>

            {/* Topbar */}
            <Topbar />
          </div>
        </div>

        {/* Content Area with Scrolling */}
        <div
          className="flex-grow-1"
          style={{
            marginLeft: expanded ? "250px" : "50px",
            transition: "margin-left 0.3s",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
