import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
//import createVehicle from "./components/createVehicle/createVehicle.jsx"
//import Home from "./components/Home/Home.jsx"


//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  return (
      <Routes>
          <Route path='/' element={ <Landing /> } />
          {/* <Route path='/home' element={ <Home /> } /> */}
          {/* <Route path='/reservation-panel' element={ <PaneldeReservacion /> } /> */}
          {/* <Route path='/createvehicle' element={ <createVehicle /> } /> */}
          {/* <Route path='/contact-us' element={ <Contact-us /> } /> */}
          {/* <Route path='/about' element={ <About /> } /> */}
          {/* <Route path='/navbar' element={ <BarraNav /> } /> */}
          {/* <Route path='/dashboard' element={ <Dashboard /> } /> */}
      </Routes>
  );
};

export default App
