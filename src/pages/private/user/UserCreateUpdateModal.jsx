//@ External Lib Import

import { Card, Modal } from "react-bootstrap";
import classNames from "classnames";

//@ main component
const UserCreateUpdate = ({ modal, setModal, toggle }) => {
  return (
    <Card className={classNames("", { "d-none": !modal })}>
      <Card.Body>
        <Modal
          show={modal}
          onHide={toggle}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header onHide={toggle} closeButton></Modal.Header>

          <Modal.Body>
            <h1>alfaz</h1>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default UserCreateUpdate;
