import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import CreateVehicle from './components/CraeteVehicle/createVehicle.jsx'
import HomeView from './views/home/homeView';
import ReservationView from './views/ReservationView/ReservationView';
import CarsView from './views/ListCars/carsView';
import LotSelectionView from './views/LotSelection/LotSelectionView';
import VehicleDetails from './components/VehicleDetails/vehicleDetails.jsx';

import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
//import Home from "./components/Home/Home.jsx"




//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  return (
      <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/create-vehicle' element={ <CreateVehicle /> } />
          <Route path='/home' element={ <HomeView /> } /> 
          <Route path='/parking-lot-selection' element={ <LotSelectionView /> } />
          <Route path='/reservation-panel' element={ <ReservationView /> } /> 
          <Route path='/vehicles' element={<CarsView/>} /> 
          <Route path="/vehicle/:license_plate_id" exact element={<VehicleDetails />} />
          <Route path='/about-us' element={ <AboutUs /> } /> 
          <Route path='/nav' element={ <Navbar /> } /> 
      </Routes>
  );
};

export default App