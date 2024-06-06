import React from 'react';

function FilaCategoria({ categoria }) {
  return (
    <tr>
      <th colSpan="3">{categoria}</th>
    </tr>
  );
}

export default FilaCategoria;
