import React, { useState } from "react";
import CategoryCreateUpdateModal from "./CategoryCreateUpdateModal";

const Category = () => {
  const [modal, setModal] = useState(false);

  const addShowModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <CategoryCreateUpdateModal />
    </div>
  );
};

export default Category;
