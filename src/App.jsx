import React from 'react'
import './App.css'
import PRODUCTOS from './productos.js'
import TablaProductos from './TablasProductos'

function App() {

  return (
    <div className="App">
      <h1>Ánima Café</h1>
      <TablaProductos productos={PRODUCTOS}/>
    </div>
  )
}

export default App
