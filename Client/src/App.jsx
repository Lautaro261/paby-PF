import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
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
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import DataEditView from './views/admin/DataEditView/DataEditView';
import AllUsersAdminView from './views/admin/AllUsersAdminView/AllUsersAdminView';
import ClientDetailsView from './views/admin/ClientDetailsView/ClientDetailsView';
import HomeAdminView from './views/admin/HomeAdminView/HomeAdminView';
import ManualParkingLotFilterView from './views/admin/ManualParkingLotFilterView/ManualParkingLotFilterView';
import ManualParkingLotSelectionView from './views/admin/ManualParkingLotSelectionView/ManualParkingLotSelectionView';
import ManualReserveView from './views/admin/ManualReserveView/ManualReserveView';
import ManualReserveFormView from './views/admin/ManualReserveFormView/ManualReserveFormView';
import { setUserSession } from './redux/features/users/usersSlice';


axios.defaults.baseURL = 'http://localhost:3001'


//axios.defaults.baseURL = 'https://pruebadeploy-production-abaa.up.railway.app/'


//pueden hacer pruebas de su componente importandolo y descomentando la ruta que les correspode (ctrl+k+u)
//y cambiando debajo la ruta que se renderiza el elemento que corresponde a su componente

const App = () => {
  
  //Para verificar si el usuario esta logueado 
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
 
   useEffect(() => {
     const isLoggedIn = localStorage.getItem('isLoggedIn');
     if (isLoggedIn === 'true') {
       dispatch(setUserSession());
     }

     
   }, [dispatch]);
     

  const { isAuthenticated } = useAuth0()
  // const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  // const isLoggedIn = localStorage.getItem(`isLoggedIn`)

  var adminAuth= localStorage.getItem("rol")
  console.log(adminAuth, "soy el admin")
 

  return (

    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={adminAuth==="admin" ? <HomeAdminView />:<HomeView />} />
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
      <Route path='/profile' element={<ProfileView />} />
      <Route path='/editprofile' element={<EditProfileView />} />
      <Route path='/online-support' element={< OnlineSupportView />} />
      <Route path='/Shopping' element={<ShoppingCartView />} />

      <Route element={<ProtectedRoutes adminAuth={adminAuth}/>} >
          <Route path='/admin/dataedit' element={<DataEditView />} />
          <Route path='/admin/manual-parking-lot-filter' element={ <ManualParkingLotFilterView /> } />
          <Route path='/admin/manual-parking-lot-selection' element={ <ManualParkingLotSelectionView /> } />
          <Route path='/admin/manual-reserve' element={<ManualReserveView />} />
          <Route path='/admin/manual-reserve/form' element={<ManualReserveFormView />} />
          <Route path='/admin/ok' element={<DataEditView />} />
          <Route path='/admin/clients' element={<AllUsersAdminView />} />
          <Route path='/admin/clients/details/:sub' element={<ClientDetailsView />} />
          <Route path='/admin/home' element={<HomeAdminView />} />
       </Route>


      
      </>
      : null }

    </Routes>
  );
};

export default App;