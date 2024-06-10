import React from 'react'
import Tabla from './Components/Tabla'
import './Style.css'; //Se importa el css para poder utilizarlo 
import TablaRecolectoresRegistrados from './Components/TablaRecolectoresRegistrados';
import TablaNotificaciones from './Components/TablaNotificaciones';
import TablaReportes from './Components/TablaReportes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
 
        
      <BrowserRouter>
        <Routes>
          <Route path={'/recolectores'} element={<TablaRecolectoresRegistrados/>}/>
          <Route path={'/notificacion'} element={<TablaNotificaciones/>}/>
          <Route path={'/reportes'} element={<TablaReportes/>}/>
          <Route path={"/"} element = {<Tabla/>}/>
        </Routes>
      </BrowserRouter>

    
  
  )
}
