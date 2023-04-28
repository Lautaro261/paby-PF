import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
<<<<<<< HEAD
import ReservationPanel from './views/ReservationPanel/ReservationPanel';
//import createVehicle from "./components/createVehicle/createVehicle.jsx"
=======
import CreateVehicle from './components/CraeteVehicle/createVehicle.jsx'
>>>>>>> e3323d096af88b1faf1dec4fa865d4ef6b13a1d7
//import Home from "./components/Home/Home.jsx"


//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  return (
      <Routes>
          <Route path='/' element={ <Landing /> } />
          {/* <Route path='/home' element={ <Home /> } /> */}
<<<<<<< HEAD
          <Route path='/reservation-panel' element={ <ReservationPanel /> } />
          {/* <Route path='/createvehicle' element={ <createVehicle /> } /> */}
=======
          {/* <Route path='/reservation-panel' element={ <PaneldeReservacion /> } /> */}
          <Route path='/createvehicle' element={ <CreateVehicle /> } />
>>>>>>> e3323d096af88b1faf1dec4fa865d4ef6b13a1d7
          {/* <Route path='/contact-us' element={ <Contact-us /> } /> */}
          {/* <Route path='/about' element={ <About /> } /> */}
          {/* <Route path='/navbar' element={ <BarraNav /> } /> */}
          {/* <Route path='/dashboard' element={ <Dashboard /> } /> */}
      </Routes>
  );
};

export default App
