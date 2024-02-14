import React from "react";
import { Avatar, Badge } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import { Container, Content, Header } from "rsuite";

const TopNav = () => {
  return (
    <div>
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
              <span className=" pb-2 ps-2 pe-3 fw-bolder text-info">Admin</span>
            </div>
            <div>
              <GearIcon spin style={{ fontSize: "1.3em", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
