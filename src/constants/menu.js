import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import AppSelectIcon from "@rsuite/icons/AppSelect";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import PeoplesIcon from "@rsuite/icons/Peoples";

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
      icon: PeoplesIcon,
      url: "/user",
    },
    {
      key: "category",
      label: "Category",
      icon: AppSelectIcon,
      url: "/category",
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
