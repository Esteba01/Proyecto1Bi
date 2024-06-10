import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';



function createData(
    
    ruta= string,
    sector= string,
    duracion= string,
    descripcion = string,
    
  ) {
    return { ruta, sector, duracion, descripcion };
  }

  const rows = [
    createData('Todos', 'Todos', '2023/07/05 - 2023/08/02','Cambio de contenedores'),
    createData('Chillogallo', 'Todos', '2023/07/05','Suspensión de servicio de recolección'),
    createData('Quitumbe', 'Ruta 1', '2023/05/25','Modificación de la Ruta'),

  ];

export default function TablaNotificaciones() {
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
          <MarkChatUnreadIcon sx={{ fontSize: 40, marginRight: 2, margintop: 10, marginBottom: -2  }}></MarkChatUnreadIcon>
          <Button variant='contained' sx={{ backgroundColor: '#2E1572', color: 'white' }} >Generar notificación</Button>  
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
              <TableCell align="left">Sector</TableCell>
              <TableCell align="right">Ruta</TableCell>
              <TableCell align="right">Duración</TableCell>
              <TableCell align="right">Descripción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.sector}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sector}
                </TableCell>
                <TableCell align="right">{row.ruta}</TableCell>
                <TableCell align="right">{row.duracion}</TableCell>
                <TableCell align="right">{row.descripcion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <div className='BotonesAbajo'>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Detalles</Button>
        <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Eliminar</Button>
        </div>
      </div>


    </div>
  )
}

