import React from 'react'
import { Table } from 'semantic-ui-react'
import { MDBDataTable } from 'mdbreact';
const TableExampleStriped = () => {
    
        const data = {
    columns: [
      {
        label: 'Exercise Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
     
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        
      },
     
      {
        name: 'Donna Snider',
        
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      
      data={data}
    />
  );
}


export default TableExampleStriped