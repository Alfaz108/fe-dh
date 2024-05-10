import React, { useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomTable from '../../components/app/table';
import BazarCreatUpdateModal from './BazarCreatUpdateModal';

const Bazar = () => {
    const [modal, setModal] = useState(false);

    const addShowModal = () =>{
        setModal(true)
    };

    const toggle = () =>{
        setModal(!modal)
    }

    const ActionColumn =() =>{

    }
        const columns = useMemo(() => [
      {
        Header: "Action",
        accessor: "action",
        classes: "table-action",
        Cell: ActionColumn,
      },
      {
        Header: "#",
        accessor: "sl",
        Cell: ({ row }) => row.index + 1,
        classes: "table-user",
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Gender",
        accessor: "gender",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Address",
        accessor: "address",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: ({ value }) => value || "n/a",
        classes: "table-user",
      },
    ],
    []
  );
    return (
        <div className='mx-2'>
            <Card.Body>
                <CustomTable 
                columns={columns}
                addShowModal={addShowModal}
                />
                <BazarCreatUpdateModal 
                    modal={modal}
                    toggle={toggle}
                    setModal={setModal}
                />                                
            </Card.Body>
        
        </div>
    );
};

export default Bazar;