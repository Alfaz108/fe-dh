import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CategoryCreateUpdateModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      active: yup.boolean().required(),
      type: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="my-2">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control {...register("name")} />
                  <Form.Control.Feedback>
                    {" "}
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="my-2">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Active</Form.Label>
                  <Form.Control {...register("active")} />
                  <Form.Control.Feedback>
                    {" "}
                    {errors.active?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="my-2">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Type</Form.Label>
                  <Form.Control {...register("type")} />
                  <Form.Control.Feedback>
                    {" "}
                    {errors.type?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <div className="text-end">
              <input className="btn btn-primary" type="submit"></input>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryCreateUpdateModal;
