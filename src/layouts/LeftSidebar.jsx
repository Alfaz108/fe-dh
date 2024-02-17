import React, { useState } from "react";
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom"; // Import Link
import MENU_ITEMS from "../constants/menu";

const LeftSidebar = ({ expanded, activeKey, setActiveKey }) => {
  const renderMenuItem = (menuItem) => {
    console.log(menuItem?.icon);
    if (menuItem.children) {
      return (
        <Nav.Menu
          key={menuItem.key}
          eventKey={menuItem.key}
          title={menuItem.label}
        >
          {menuItem.children.map((child) => renderMenuItem(child))}
        </Nav.Menu>
      );
    } else {
      return (
        <Nav.Item
          key={menuItem.key}
          eventKey={menuItem.key}
          icon={menuItem?.icon && <menuItem.icon />}
          as={Link}
          to={menuItem.url}
        >
          {menuItem.label}
        </Nav.Item>
      );
    }
  };

  return (
    <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
      <Sidenav.Body>
        <Nav
          activeKey={activeKey}
          onSelect={setActiveKey}
          className="pe-5 me-3"
        >
          {MENU_ITEMS().map((menuItem) => renderMenuItem(menuItem))}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

export default LeftSidebar;
