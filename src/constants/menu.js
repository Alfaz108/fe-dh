import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import DocPassIcon from "@rsuite/icons/DocPass";
import PeoplesCostomizeIcon from "@rsuite/icons/PeoplesCostomize";
import MemberIcon from "@rsuite/icons/Peoples";
import PeopleSpeakerIcon from "@rsuite/icons/PeopleSpeaker";
import WaitIcon from "@rsuite/icons/Wait";
import SentToUserIcon from "@rsuite/icons/SentToUser";

import TagAuthorizeIcon from "@rsuite/icons/TagAuthorize";
const MENU_ITEMS = () => {
  return [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: DashboardIcon,
      url: "/",
    },

    {
      key: "border",
      label: "Border",
      icon: SentToUserIcon,
      url: "/border",
    },
    {
      key: "bazar",
      label: "Bazar",
      icon: MemberIcon,
      url: "/bazar",
    },

    {
      key: "deposit",
      label: "Deposit",
      icon: PeopleSpeakerIcon,
      url: "/deposit",
    },

    {
      key: "meal",
      label: "Meal",
      icon: WaitIcon,
      url: "/meal",
    },
    {
      key: "summary",
      label: "Summary",
      icon: PeoplesCostomizeIcon,
      url: "/summary",
    },

    {
      key: "user",
      label: "User",
      icon: DocPassIcon,
      url: "/user",
    },
  ];
};

export default MENU_ITEMS;
