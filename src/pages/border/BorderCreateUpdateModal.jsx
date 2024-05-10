import React, { useEffect } from 'react';
import { Button, Card, Form, Modal, Spinner} from 'react-bootstrap';
import  classNames  from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import statusOption from "../../constants/static/statusOption";


import * as yup from "yup";
import { useCreateBorderMutation } from '../../redux/service/auth/borderService';


    const borderForm = [
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
           {
            name: 'initialDepositAmount',
            label: 'Initial Deposit Amount',
            type : 'number',
            placeholder: 'Initial Deposit',
            defaultValue: 'value'
        },
           {
            name: 'depositAmount',
            label: 'Deposit Amount',
            type : 'number',
            placeholder: 'Deposit Amount',
            defaultValue: 'value'
        },
           {
            name: 'mealQuantity',
            label: 'Meal Quantity',
            type : 'number',
            placeholder: 'Meal Quantity',
            defaultValue: 'value'
        },
          
        
        
    ];


  const schemaResolver = yup.object().shape({
        email: yup.string().required('Email is required')
      });


    const BorderCreateUpdateModal = ({modal, setModal, toggle}) => {

      const [createBorder, {isLoading, isSuccess}] =useCreateBorderMutation()


    useEffect(() =>{
        setModal(false)
    }, []);

    const methods = useForm({
      mode: 'all',
      // defaultValues,
      resolver: yupResolver(schemaResolver)

    })

      const {handleSubmit, control,reset } = methods;

      const onSubmit = (data) =>{
        const createData = data;
        createBorder(createData)

        console.log(data);
      }

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
                <h4>Modal Header</h4>
                </Modal.Header>
                <Modal.Body>
                     <form  onSubmit={handleSubmit(onSubmit)} 
                     >
                      <div>
                      <div className="row">
                          {borderForm.map((item) =>(
                      <div className='col-md-4 col-12'>                         
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

                    <span className='w-50'>   
                       <Form.Group>
                      <Form.Label htmlFor="status">Status</Form.Label>
                      <Controller
                        name="status"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Form.Select {...field} isInvalid={!!error}>
                              <option value="">Select Status</option>
                              {statusOption.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </Form.Select>

                            {error && (
                              <Form.Control.Feedback type="invalid">
                                {error.message}
                              </Form.Control.Feedback>
                            )}
                          </>
                        )}
                      />
                    </Form.Group>
                     </span>
            
                    </div>
                    </div>

                <div className="mt-3 text-end">
                <Button type="submit" 
                disabled={isLoading}
                
                >
                  Submit{" "}
                  {(isLoading) && (
                    <Spinner animation="border" size="sm" />
                  )}
                </Button>
              </div>
                  </form>  
                </Modal.Body>
                </Modal>
        </div>
    );
};

export default BorderCreateUpdateModal;