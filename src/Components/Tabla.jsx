import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button,  } from '@mui/material'
import { Link } from 'react-router-dom';


function createData(
    
    rutas= string,
    tipo= string,
    dias= string,
    descripcion = string,
    
  ) {
    return { rutas, tipo, dias, descripcion };
  }

  const rows = [
    createData('Ruta 1', 'Nocturno', 'Lunes - Miercoles -Viernes','Av. Moran Valverde'),
    createData('Ruta 2', 'Diurno', 'Lunes - Miercoles -Viernes','Av. Mariscal Sucre'),
    createData('Ruta 3', 'Diurno', 'Martes - Jueves - Sabado','Av. Quitumbe'),

  ];

export default function Tabla() {
  return (
    
    <div>
      <div  className='Navbar'>
        <div className='Opciones'>
          <p>Sectores</p>
          
          <Link to={'/'} style={{ textDecoration: 'none' }}><p>Rutas</p></Link>
          <Link to={'/recolectores'} style={{ textDecoration: 'none' }}><p>Recolectores</p></Link>
          <Link to={'/notificacion'} style={{ textDecoration: 'none' }}><p>Notificaciones</p></Link>
          <Link to={'/reportes'} style={{ textDecoration: 'none' }}><p>Reportes</p></Link>
          
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
        
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table' size='medium'>
          <TableHead sx={{ backgroundColor: '#E5E5E5' }}>
            <TableRow>
              <TableCell align="left">Rutas</TableCell>
              <TableCell align="right">Tipo</TableCell>
              <TableCell align="right">Días</TableCell>
              <TableCell align="right">Descripción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.rutas}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.rutas}
                </TableCell>
                <TableCell align="right">{row.tipo}</TableCell>
                <TableCell align="right">{row.dias}</TableCell>
                <TableCell align="right">{row.descripcion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <div className='BotonesAbajo'>
          
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Detalles</Button>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Editar</Button>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Eliminar</Button>
        </div>
      </div>






    </div>
  )
}
