import React from "react";
import "./../App.css";
import { Toggle } from "rsuite";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@rsuite/icons/Menu";
import { Padding } from "@mui/icons-material";

const DefaultLayout = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  const buttonFunction = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div
      style={{
        overflowX: "hidden",
      }}>
      <div className="d-flex">
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
          <span>
            <MenuIcon
              style={{
                position: "absolute",
                top: "12px",
                left: "7px",
                width: "30px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={buttonFunction}></MenuIcon>
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
