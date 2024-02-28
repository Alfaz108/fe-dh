import React, { useState } from "react";
import "./../App.css";
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom";
import MENU_ITEMS from "../constants/menu";
import logo from "../assets/logo/logo2.png";

const LeftSidebar = ({ expanded, activeKey, setActiveKey }) => {
  const renderMenuItem = (menuItem) => {
    if (menuItem.children) {
      return (
        <Nav.Menu
          hover-none
          key={menuItem.key}
          eventKey={menuItem.key}
          title={menuItem.label}
          icon={menuItem?.icon && <menuItem.icon />}>
          {menuItem.children.map((child) => renderMenuItem(child))}
        </Nav.Menu>
      );
    } else {
      return (
        <Nav.Item
          style={{
            width: "250px",
            fontWeight: `${menuItem?.fontWeight}`,
            backgroundColor: "#ffffff",
          }}
          hover-none
          key={menuItem.key}
          eventKey={menuItem.key}
          icon={menuItem?.icon && <menuItem.icon />}
          as={Link}
          to={menuItem.url}>
          {menuItem.label}
        </Nav.Item>
      );
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        style={{ flex: "none" }}>
        <Sidenav.Header>
          <div
            expanded={expanded}
            style={{
              padding: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              backgroundColor: "#ffffff",
            }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: expanded ? "35px" : "35px",
                marginRight: "10px",
                marginLeft: "-5px",
              }}
            />
            {expanded && <span className="text-primary">DHAROSH</span>}
          </div>
        </Sidenav.Header>
        <Sidenav.Body
          style={{
            height: "calc(100vh - 60px)",
            overflowY: "auto",
            backgroundColor: "#ffffff",
          }}>
          <Nav className="" activeKey={activeKey} onSelect={setActiveKey}>
            {MENU_ITEMS().map((menuItem) => renderMenuItem(menuItem))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <div style={{ flex: "1", overflowY: "auto" }}></div>
    </div>
  );
};

export default LeftSidebar;
