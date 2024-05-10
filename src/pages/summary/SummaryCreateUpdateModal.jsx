import React from 'react';
import { Modal } from 'react-bootstrap';

const SummaryCreateUpdateModal = ({modal, setModal, toggle}) => {
    return (
        <div>
            <Modal 
                show={modal}
                onHide={toggle}
                backdrop='static'
                keyboard={false}
                setModal
                size='lg'
            >
                <Modal.Header onHide={toggle} closeButton>
                    <h4>This is header</h4>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is modal body</h1>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SummaryCreateUpdateModal;