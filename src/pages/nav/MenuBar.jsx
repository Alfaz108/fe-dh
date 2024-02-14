import React from "react";
import "../../App.css";
import ReactDOM from "react-dom"; // Import ReactDOM
import { Sidenav, Nav, IconButton, AvatarGroup, Avatar, Badge } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import GearIcon from "@rsuite/icons/Gear";
import MenuIcon from "@rsuite/icons/Menu";
import SentToUserIcon from "@rsuite/icons/SentToUser";
import logo from "../../assets/logo/dharosh_Logo.png";

const MenuBar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  const menuButton = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <div>
        {/* top bar  */}
        <div className="d-flex bg-body-tertiary border  align-items-center justify-content-end">
          <div className="icon-example-list pe-2 ">
            <div className="d-flex p-1 align-items-center justify-content-center ">
              <div className="pt-2 pe-2 d-flex align-items-center">
                {" "}
                <span>
                  {" "}
                  <Badge color="blue">
                    <Avatar
                      size="xs"
                      circle
                      src="https://avatars.githubusercontent.com/u/12592949"
                      alt="@superman66"
                    />
                  </Badge>
                </span>
                <span className=" pb-2 ps-2 pe-3 fw-bolder text-info">
                  Admin
                </span>
              </div>
              <div>
                <GearIcon spin style={{ fontSize: "1.3em" }} />
              </div>
            </div>
          </div>
        </div>

        {/* sidebar  */}
        <div
          className=""
          style={{
            width: 240,
            height: "100vh",
            position: "fixed",
            top: 0,
            zIndex: 999,
          }}>
          <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
            <Sidenav.Body className="border">
              <Nav
                style={{
                  position: "relative",
                }}
                activeKey={activeKey}
                onSelect={setActiveKey}>
                <span
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "-40px",
                    zIndex: 1000,
                  }}>
                  <IconButton
                    onClick={menuButton}
                    icon={<MenuIcon style={{ fontSize: "1em" }} />}
                  />
                </span>
                <Nav.Item icon={<SentToUserIcon />} className="fw-bolder  fs-5">
                  DHAROSH
                </Nav.Item>
                <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  User Group
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  Support Group
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  Tanki Group
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  Pocha Group
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  Hisab Nikash Group
                </Nav.Item>
                <Nav.Menu
                  placement="rightStart"
                  eventKey="3"
                  title="Advanced"
                  icon={<MagicIcon />}>
                  <Nav.Item eventKey="3-1">Geo</Nav.Item>
                  <Nav.Item eventKey="3-2">Devices</Nav.Item>
                  <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  placement="rightStart"
                  eventKey="4"
                  title="Settings"
                  icon={<GearCircleIcon />}>
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Channels</Nav.Item>
                  <Nav.Item eventKey="4-3">Versions</Nav.Item>
                  <Nav.Menu eventKey="4-5" title="Custom Action">
                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle
              expanded={expanded}
              onToggle={(expanded) => setExpanded(expanded)}
            />
          </Sidenav>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<MenuBar />, document.getElementById("root"));

export default MenuBar;
