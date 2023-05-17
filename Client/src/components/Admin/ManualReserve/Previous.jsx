import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getAllParkingLots, 
    getParkingLotById,
    getLevelsByParkingLotId,
    getParkingSpacesByParkingLotId 
} from "../../../redux/features/parkingSpaces/parkingSpacesSlice";
import { setCurrentUserId } from "../../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice";


const Previous = () => {
    const dispatch = useDispatch();
    const allParkingLots = useSelector(state => state.parkingSpaces.allParkingLots);
    const userId = localStorage.getItem('sub');

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

    return (
        <div>
            <Link to='/admin/manual-reserve'>
                Seguir
            </Link>
        </div>
    );
};

export default Previous;