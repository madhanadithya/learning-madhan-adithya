import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTable = ({ products, onDelete }) => {
  const navigate = useNavigate();

  const columns = [
    { name: 'Name', selector: row => row.name },
    { name: 'Price', selector: row => row.price },
    { name: 'Availability', selector: row => row.availability },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Button
            variant="outlined"
            onClick={() => navigate(`/create/${row._id}`)}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(row._id)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      )
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={products}
      pagination
    />
  );
};

export default ProductTable;
