import React from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

const CustomInputFIelds = ({ borderForm }) => {
  const methods = useFormContext();
  const { control } = methods;
  return (
    <>
      {borderForm?.map((item) => (
        <div className="col-md-6 col-12">
          <Form.Group className="pb-3">
            <Form.Label htmlFor={item?.name}>{item?.label}</Form.Label>
            <Controller
              name={item?.name}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Form.Control
                    {...field}
                    type={item?.type}
                    placeholder={item?.placeholder}
                    autoComplete="off"
                    className={
                      error ? "form-control is-invalid" : "form-control"
                    }
                  />

                  {error && (
                    <Form.Control.Feedback type="invalid">
                      {error?.message}
                    </Form.Control.Feedback>
                  )}
                </>
              )}
            />
          </Form.Group>
        </div>
      ))}
    </>
  );
};

export default CustomInputFIelds;
