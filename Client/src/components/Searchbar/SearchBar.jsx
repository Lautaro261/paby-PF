import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {searchVehicleBrandByName} from '../../redux/features/vehicles/vehiclesSlice'
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearchTermChange }) {
    const dispatch = useDispatch()
    const [vehicleBrand, setVehicleBrand] = useState('')

    function handleInputChange(e) {
        setVehicleBrand(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!vehicleBrand) {
            alert('Debe escribir un nombre')
            return false
        }
        dispatch(searchVehicleBrandByName(vehicleBrand))
        onSearchTermChange(vehicleBrand)
        setVehicleBrand('')
    }

    return (
        <div>
            <input
            type="text"
            placeholder="Buscar vehiculo.."
            value={vehicleBrand}
            onChange={e=>handleInputChange(e)}/>
            <button type='submit' className={style.searchButton} onClick={(e)=> handleSubmit(e)}><i className="fas fa-search"></i>Buscar</button>
        </div>
    )
}