import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    </div>
  )
}
