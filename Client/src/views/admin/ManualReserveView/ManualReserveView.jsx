import React, { useEffect }from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";
import ManualReserve from "../../../components/Admin/ManualReserve/ManualReserve";
import { useDispatch, useSelector } from 'react-redux';
import { 
    getAllParkingLots, 
    getParkingLotById,
    getLevelsByParkingLotId,
    getParkingSpacesByParkingLotId 
} from "../../../redux/features/parkingSpaces/parkingSpacesSlice";
import { setCurrentUserId } from "../../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice";


const ManualReserveView = () => {
    const dispatch = useDispatch();
    const allParkingLots = useSelector(state => state.parkingSpaces.allParkingLots);
    const userId = localStorage.getItem('sub');
    const parking_lot = useSelector(state => state.parkingSpaces.selectedParkingLot);
    const levels = useSelector(state => state.parkingSpaces.levelsForThisParkingLot);
    const parking_spaces = useSelector(state => state.parkingSpaces.parkingSpacesForThisParkingLot);

    useEffect(() => {
        dispatch(getAllParkingLots());
    }, []);
    
    useEffect(() => {
        if (userId) {
            dispatch(setCurrentUserId(userId));
        }
    }, [dispatch, userId]);

    useEffect(() => {
        if (allParkingLots.length > 0) {
            const selectParkingLot = allParkingLots[0];
            dispatch(getParkingLotById(selectParkingLot.id));
             dispatch(getLevelsByParkingLotId(selectParkingLot.id));
             dispatch(getParkingSpacesByParkingLotId(selectParkingLot.id));
        }
    }, [dispatch, allParkingLots]);

    if(allParkingLots.length===0 || !allParkingLots || !userId || 
        Object.keys(parking_lot).length === 0 || 
    Object.keys(levels).length === 0 ||
    Object.keys(parking_spaces).length === 0){
       
        return (
            <div >
                <div><Navbar /> </div>
                <div> <AdminDash /></div>
                <div>
                    <div >cargando...</div>
                </div>
                 <div ><Footer/></div>
            </div>
        )
    }
    
    return (
        <div >
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><ManualReserve/></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default ManualReserveView;