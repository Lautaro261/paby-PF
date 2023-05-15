import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Landing from './views/Landing/Landing'
import HomeView from './views/homeView/homeView';
import ParkingLotFilterView from './views/ParkingLotFilter/ParkingLotFilterView';
import LotSelectionView from './views/LotSelection/LotSelectionView';
import ReservationView from './views/ReservationView/ReservationView';
import ParkingSpacePayment from './components/ParkingSpacePayment/ParkingSpacePayment';
import SuccessPayment from './components/SuccessPayment/SuccessPayment';
import FailurePayment from './components/FailurePayment/FailurePayment';
import VehiclesView from './views/VehiclesView/VehiclesView';
import AboutUs from './components/AboutUs/AboutUs';
import CreateVehicleView from './views/CreateVehicleView/CreateVehicleView';
import ProfileView from './views/ProfileView/ProfileView';
import EditProfileView from './views/EditProfileView/EditProfileView';
import HistoryView from './views/HistoryView/HistoryView';
import ParkingSpaceReservationView from './views/ParkingSpaceReservationView/ParkingSpaceReservationView';
// import VehicleDetailsView from './views/VehiclesView/VehiclesView';
import OnlineSupportView from './views/OnlineSupportView/OnlineSupportView';
import ShoppingCartView from './views/ShoppingCartView/ShoppingCartView';
// import { useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'

axios.defaults.baseURL = 'http://localhost:3001'
//axios.defaults.baseURL = 'https://pruebadeploy-production-abaa.up.railway.app/'


//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  
  //Para verificar si el usuario esta logueado 

  const { isAuthenticated } = useAuth0()
  // const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const isLoggedIn = localStorage.getItem(`isLoggedIn`)

  return (

    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<HomeView />} />
      <Route path='/about-us' element={<AboutUs />} />
      { isAuthenticated || isLoggedIn  ?
      <>
      <Route path='/create-vehicle' element={<CreateVehicleView />} />
      <Route path='/parking-lot-filter' element={<ParkingLotFilterView />} />
      <Route path='/parking-lot-selection' element={<LotSelectionView />} />
      <Route path='/reservation-panel' element={<ReservationView />} />
      <Route path='/parking-space-reservation' element={<ParkingSpaceReservationView />} />
      <Route path='/parking-space-payment' element={<ParkingSpacePayment />} />
      <Route path='/success-payment' element={<SuccessPayment />} />
      <Route path='/failure-payment' element={<FailurePayment />} />
      <Route path='/reservations-history' element={<HistoryView />} />
      <Route path='/vehicles' element={<VehiclesView />} />
      {/* <Route path='/vehicle/:license_plate_id' element={<VehiclesView />} /> */}
      <Route path='/profile' element={<ProfileView />} />
      <Route path='/editprofile' element={<EditProfileView />} />
      <Route path='/online-support' element={< OnlineSupportView />} />
      <Route path='/Shopping' element={<ShoppingCartView />} />
      </>
      : null }

    </Routes>
  );
};

export default App;