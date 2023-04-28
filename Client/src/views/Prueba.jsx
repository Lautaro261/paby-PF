import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLevelsByParkingLotId, getParkingLotById } from '../redux/features/parkingSpaces/parkingSpacesSlice';

const Prueba = () => {
    const dispatch = useDispatch();
  const parqueadero = useSelector(state => state.parkingSpaces.parkingLot);
  const zotano = useSelector(state => state.parkingSpaces.levelsForThisParkingLot);
    
    useEffect(() => {
        dispatch(getParkingLotById());
        dispatch(getLevelsByParkingLotId());
    }, [dispatch]);

    return (
        <div>
            <div>{ parqueadero.id }</div>
            <div>{ zotano[0] && zotano[0].id }</div>
        </div>
    );
};

export default Prueba;