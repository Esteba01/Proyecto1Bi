import { BorderAll } from '@mui/icons-material'
import { Box, Button, Container, Table } from '@mui/material'
import React from 'react'
import Tabla from './Components/Tabla'
import './Style.css'; //Se importa el css para poder utilizarlo 
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function App() {
  return (
    <div >
      <div  className='Navbar'>
        <div className='Opciones'>
          <p>Sectores</p>
          <p>Rutas</p>
          <p>Recolectores</p>
          <p>Notificaciones</p>
          <p>Reportes</p>
        </div>
        <div className='Logo'>
         <h1>QuiCleanTo</h1>
        </div>
      </div>
      
      
      <div className='Cuerpo'>
        <div className='SobreTabla'>
          <div>
          <LocalShippingIcon sx={{ fontSize: 40, marginRight: 2, margintop: 10, marginBottom: -2  }}></LocalShippingIcon>
          <Button variant='contained' sx={{ backgroundColor: '#2E1572', color: 'white' }} >Agregar ruta</Button>  
          </div>
          <select name="languages" id="lang">
          <option value="select">Sector</option>
          <option value="javascript">Zabala</option>
          <option value="php">El mirador</option>
          </select>
        </div>
        <Tabla></Tabla>
        <div className='BotonesAbajo'>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Detalles</Button>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Editar</Button>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Eliminar</Button>
        </div>
      </div>
      
      
    </div>
    
  
  )
}
