import React, { useState } from "react";
import "./../App.css";
import { Sidenav, Nav, List } from "rsuite";
import { Link } from "react-router-dom"; // Import Link
import MENU_ITEMS from "../constants/menu";
import Dashboard from "@rsuite/icons/legacy/Dashboard";

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
          style={{ width: "250px" }}
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
    <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
      <Sidenav.Body>
        <Nav className="" activeKey={activeKey} onSelect={setActiveKey}>
          {MENU_ITEMS().map((menuItem) => renderMenuItem(menuItem))}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

export default LeftSidebar;
