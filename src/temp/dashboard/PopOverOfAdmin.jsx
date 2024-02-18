import React from "react";
import { Popover, Whisper, Button, Dropdown, Badge, Avatar } from "rsuite";

const MenuPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
  <Popover ref={ref} {...rest} full>
    <Dropdown.Menu onSelect={onSelect}>
      <Dropdown.Item eventKey={1}>log out</Dropdown.Item>
      <Dropdown.Item eventKey={2}>edit profile</Dropdown.Item>
    </Dropdown.Menu>
  </Popover>
));

const PopOverOfAdmin = () => {
  const ref = React.useRef();
  function handleSelectMenu(eventKey, event) {
    ref.current.close();
  }
  return (
    <>
      <div className="pt-2 pe-2 d-flex align-items-center">
        <span>
          <Badge color="blue">
            <Avatar
              size="sm"
              circle
              src="https://avatars.githubusercontent.com/u/12592949"
              alt="@superman66"
              speaker={<MenuPopover onSelect={handleSelectMenu} />}
            />
          </Badge>
        </span>
      </div>
      <div>
        <Whisper
          placement="bottomEnd"
          controlId="control-id-with-dropdown"
          trigger="click"
          ref={ref}
          speaker={<MenuPopover onSelect={handleSelectMenu} />}
        >
          <Button className="" size="xs">
            ADMIN
          </Button>
        </Whisper>
      </div>
    </>
  );
};

export default PopOverOfAdmin;
