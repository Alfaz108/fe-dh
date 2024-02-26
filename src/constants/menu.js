import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import AdminIcon from "@rsuite/icons/Admin";

const MENU_ITEMS = () => {
  return [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: DashboardIcon,
      url: "/",
    },

    {
      key: "users",
      label: "Users",
      icon: AdminIcon,
      url: "/user",
    },

    {
      key: "text",
      label: "Product Setting",
      icon: GearCircleIcon,
      url: "/test",
    },
  ];
};

export default MENU_ITEMS;
