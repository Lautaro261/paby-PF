import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'

import CreateVehicle from './components/CraeteVehicle/createVehicle.jsx'
import Dash from './components/dashboard/dash';
import HomeView from './views/home/homeView';
import ReservationView from './views/ReservationPanel/ReservationView';
import CarsView from './views/ListCars/carsView';
import ParkingLotSelection from './views/ParkingLotSelection/ParkingLotSelection';
import ReservationPanel from './views/ReservationPanel/ReservationPanel';
//import Home from "./components/Home/Home.jsx"




//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  return (
      <Routes>
          <Route path='/' element={ <Landing /> } />
          {/* <Route path='/home' element={ <Home /> } /> */}
          <Route path='/reservation-panel' element={ <ReservationPanel /> } />
          <Route path='/createvehicle' element={ <CreateVehicle /> } />
          <Route path='/home' element={ <HomeView /> } /> 
          <Route path='/parking-lot-selection' element={ <ParkingLotSelection /> } />
          <Route path='/reservation-panel' element={ <ReservationView /> } /> 
           <Route path='/vehicles' element={<CarsView/>} /> 
          {/* <Route path='/about' element={ <About /> } /> */}
          {/* <Route path='/navbar' element={ <BarraNav /> } /> */}
           <Route path='/dashboard' element={ <Dash /> } /> 
      </Routes>
  );
};

export default App
