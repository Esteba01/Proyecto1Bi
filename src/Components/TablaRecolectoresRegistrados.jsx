import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


function createData(
    
    nombre= string,
    apellido= string,
    correo= string,
    sector = string,
    rutasignada = string,

  ) {
    return { nombre, apellido, correo, sector, rutasignada};
  }

  const rows = [
    createData('Jeremy', 'Peralbo', 'jere_mpm@hotmail.com','Quitumbe','Ruta 1'),
    createData('Alejandro', 'Velasco', 'alejo@gmail.com','N/A','N/A'),
    createData('Karen', 'Tapia', 'karen_lol@hotmail.com','Jipijapa','Ruta 4'),

  ];

  export default function TablaRecolectoresRegistrados() {
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
            <h2>Recolectores Registrados</h2> 
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
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Correo</TableCell>
                <TableCell align="right">Sector</TableCell>
                <TableCell align="right">Ruta Asignada</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow
                  key={row.nombre}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell align="right">{row.apellido}</TableCell>
                  <TableCell align="right">{row.correo}</TableCell>
                  <TableCell align="right">{row.sector}</TableCell>
                  <TableCell align="right">{row.rutasignada}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          <div className='BotonesAbajo'>
          <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Asignar</Button>
          <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Editar</Button>
          <Button variant='contained' sx={{ backgroundColor: '#5125AD', color: 'white' }}>Eliminar</Button>
          </div>
        </div>
  
  
      </div>
    )
  }
  