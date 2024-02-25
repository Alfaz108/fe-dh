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
      key: "productsMenu",
      label: "products",
      icon: GroupIcon,
      children: [
        {
          key: "products",
          label: "product",
          url: "/products",
          parentKey: "productsMenu",
        },
        {
          key: "productSettingMenu",
          label: "products settings",
          url: "/product/settings",
          parentKey: "productsMenu",
        },
      ],
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
