import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
const MENU_ITEMS = () => {
  return [
    {
      key: "dashboard",
      label: "Dashboard",
      //   icon: "uil-home-alt",
      url: "/",
    },

    {
      key: "users",
      label: "Users",
      url: "/user",
    },
  ];
};

export default MENU_ITEMS;
