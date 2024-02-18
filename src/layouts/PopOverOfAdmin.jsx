import React from "react";
import { Popover, Whisper, Button, Dropdown } from "rsuite";

const MenuPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
  <Popover ref={ref} {...rest} full>
    <Dropdown.Menu onSelect={onSelect}>
      <Dropdown.Item eventKey={1}>New File</Dropdown.Item>
      <Dropdown.Item eventKey={2}>New File with Current</Dropdown.Item>
      <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
    </Dropdown.Menu>
  </Popover>
));

const PopOverOfAdmin = () => {
  const ref = React.useRef();
  function handleSelectMenu(eventKey, event) {
    console.log(eventKey);
    ref.current.close();
  }
  return (
    <div>
      <Whisper
        placement="bottomEnd"
        controlId="control-id-with-dropdown"
        trigger="click"
        ref={ref}
        speaker={<MenuPopover onSelect={handleSelectMenu} />}>
        <Button className="" size="xs">
          ADMIN
        </Button>
      </Whisper>
    </div>
  );
};

export default PopOverOfAdmin;
