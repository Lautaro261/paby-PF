import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import CreateVehicle from './components/CraeteVehicle/createVehicle.jsx'
import HomeView from './views/home/homeView';
import ParkingLotFilterView from './views/ParkingLotFilter/ParkingLotFilterView';
import LotSelectionView from './views/LotSelection/LotSelectionView';
import ReservationView from './views/ReservationView/ReservationView';
import ParkingSpaceReservation from './components/ParkingSpaceReservation/ParkingSpaceReservation';
import ParkingSpacePayment from './components/ParkingSpacePayment/ParkingSpacePayment';
import SuccessPayment from './components/SuccessPayment/SuccessPayment';
import FailurePayment from './components/FailurePayment/FailurePayment';
import ReservationsHistory from './components/ReservationsHistory/ReservationsHistory';
import CarsView from './views/ListCars/carsView';
import VehicleDetails from './components/VehicleDetails/vehicleDetails.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
//import Home from "./components/Home/Home.jsx"

import axios from 'axios'
import ProfileView from './views/Profile/ProfileView';

axios.defaults.baseURL = 'http://localhost:3001'
//axios.defaults.baseURL = 'https://pruebadeploy-production-abaa.up.railway.app/'


//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/create-vehicle' element={<CreateVehicle />} />
      <Route path='/home' element={<HomeView />} />
      <Route path='/parking-lot-filter' element={<ParkingLotFilterView />} />
      <Route path='/parking-lot-selection' element={<LotSelectionView />} />
      <Route path='/reservation-panel' element={<ReservationView />} />
      <Route path='/parking-space-reservation/:selectedParkingSpaceId' element={<ParkingSpaceReservation />} />
      <Route path='/parking-space-payment' element={<ParkingSpacePayment />} />
      <Route path='/success-payment' element={<SuccessPayment />} />
      <Route path='/failure-payment' element={<FailurePayment />} />
      <Route path='/reservations-history' element={<ReservationsHistory />} />
      <Route path='/vehicles' element={<CarsView />} />
      <Route path='/vehicle/:license_plate_id' element={<VehicleDetails />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/nav' element={<Navbar />} />
      <Route path='/profile' element={<ProfileView />} />
      <Route path='/editprofile' element={<EditProfile />} />
    </Routes>
  );
};

export default App;