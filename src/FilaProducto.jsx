import React from 'react';

function FilaProducto({ producto }) {
  return (
    <tr>
      <td>{producto.stock === 0 ? <s>{producto.nombre}</s> : producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      
     
    </tr>
  );
}

export default FilaProducto;
