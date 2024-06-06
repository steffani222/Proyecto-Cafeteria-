import React from 'react'
import FilaCategoria from './FilaCategoria'
import FilaProducto from './FilaProducto'

function TablaProductos({ productos }) {
  const categorias = [...new Set(productos.map(producto => producto.categoria))]

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map(categoria => (
          <React.Fragment key={categoria}>
            <FilaCategoria categoria={categoria} />
            {productos
              .filter(producto => producto.categoria === categoria)
              .map(producto => (
                <FilaProducto key={producto.nombre} producto={producto} />
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default TablaProductos