import React from "react";
import { Avatar, Badge } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";

const Topbar = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#f3f3f8" }}
        className="d-flex align-items-center justify-content-end"
      >
        <div className="icon-example-list">
          <div className="d-flex p-1 align-items-center justify-content-center">
            {/* setting icon========================== */}
            <div className="me-3">
              <GearIcon spin style={{ fontSize: "1.3em", cursor: "pointer" }} />
            </div>
            {/* avater / photo icon ========================= */}
            <div className="pt-2 pe-2 d-flex align-items-center">
              <span>
                <Badge color="blue">
                  <Avatar
                    size="sm"
                    circle
                    src="https://avatars.githubusercontent.com/u/12592949"
                    alt="@superman66"
                  />
                </Badge>
              </span>
              <span className=" pb-2 ps-2 pe-3 fw-bolder text-info">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
