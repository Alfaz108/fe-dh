import React from 'react';
import { Modal } from 'react-bootstrap';

const MealCreateUpdateModal = ({
    toggle,
    setModal,
    modal
}) => {
    return (
        <div >
            <Modal 
                show={modal}
                onHide={toggle}
                backdrop='static'
                keyboard={false}
                size='lg'
            >
                <Modal.Header onHide={toggle} closeButton> 
                    <h4>This is header</h4>
                </Modal.Header>

                <Modal.Body>
                    <h1>This is Modal body</h1>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MealCreateUpdateModal;