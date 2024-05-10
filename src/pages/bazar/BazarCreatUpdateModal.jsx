import React, { useEffect } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import  classNames  from 'classnames';
import { Controller, useForm } from 'react-hook-form';

 const bazarForm = [
        {
            name: 'name',
            label: 'Name',
            type : 'text',
            placeholder: 'Enter your name',
            defaultValue: 'value'
        },
          {
            name: 'mobile',
            label: 'Mobile',
            type : 'tel',
            placeholder: 'Enter your number',
            defaultValue: 'value'
        },
          {
            name: 'email',
            label: 'Email',
            type : 'email',
            placeholder: 'Enter your email',
            defaultValue: 'value'
        },
           {
            name: 'roomNumber',
            label: 'Room Number',
            type : 'number',
            placeholder: 'Enter your room number',
            defaultValue: 'value'
        },
    ];



const BazarCreatUpdateModal = ({modal, setModal, toggle}) => {

    const methods = useForm({

    })

    const {control} = methods; 

    useEffect(()=>{
        // setModal(true)
    })
    return (
        <div className={classNames('', {'d-none' : !modal}) }>
            <Modal 
                show={modal}
                onHide={toggle}
                backdrop="static"
                keyboard={false}
                setModal
                size='lg'
            >
                <Modal.Header onHide={toggle} closeButton>
                    <h4>Modal Bazar</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                    {bazarForm.map((item) => (
                    <div className='col-md-4'>
                                <Form.Group className='pb-3'>
                      <Form.Label htmlFor={item.name}>{item.label}</Form.Label>
                      <Controller
                        name={item.name}
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Control
                              {...field}
                              type={item.type}
                              placeholder={item.placeholder}
                            //   isInvalid={!!error}
                              autoComplete="off"
                        
                            />

   

                            {error && (
                              <Form.Control.Feedback type="invalid">
                                {error.message}
                              </Form.Control.Feedback>
                            )}
                          </>
                        )}
                        
                      />
   
                    </Form.Group>
                            </div>
                        ))}

                         <div className="mt-3 text-end">
                <Button type="submit" 
                // disabled={isLoading || updateLoad}
                
                >
                  Submit{" "}
                  {/* {(isLoading || updateLoad) && (
                    <Spinner animation="border" size="sm" />
                  )} */}
                     </Button>
                 </div>
                    </div>
               
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BazarCreatUpdateModal;