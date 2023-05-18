import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedParkingSpace } from '../../redux/features/parkingSpaces/parkingSpacesSlice';
import { getAllParkingLots } from '../../redux/features/parkingSpaces/parkingSpacesSlice';

export default function SelectorParking() {
  const parking= useSelector(state=>state.parkingSpaces.allParkingLots)
  console.log(parking)
  const dispatch= useDispatch();
  const obj={}

  useEffect(() => {
    dispatch(getAllParkingLots())
  }, []);

  const ChangeHandler=(e)=>{
    if(e.target.value==="not"){
        dispatch(setSelectedParkingSpace({}))
    }else{
        dispatch(setSelectedParkingSpace(parking[e.target.value]))
    }
    
  }

  if(!parking|| parking===undefined || parking.length===0){
    return (<div>aguarde...</div>)
  }
  return (
    <select onChange={ChangeHandler}>
        <option value="not">seleccione parqueadero...</option>    
      {parking.map((parking, index) => (
        <option key={parking.id} value={index}>
          {parking.name}
        </option>
      ))}
    </select>
  );
};