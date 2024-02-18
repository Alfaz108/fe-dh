import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";

const MENU_ITEMS = () => {
  return [
    {
      label: "DHAROSH",
      // icon: image,
      url: "/",
    },
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
      icon: MagicIcon,
      url: "/user",
    },

    {
      key: "users",
      label: "Product Setting",
      icon: GearCircleIcon,
      url: "/user",
    },
  ];
};

export default MENU_ITEMS;
