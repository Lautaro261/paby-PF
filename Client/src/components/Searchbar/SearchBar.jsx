import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {searchVehicleBrandByName} from '../../redux/features/vehicleBrand/vehicleBrandSlice'
import './SearchBar.css'

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
        <div className="SearchBar">
            <input
            type="text"
            placeholder="Buscar vehiculo.."
            value={vehicleBrand}
            onChange={e=>handleInputChange(e)}/>
            <button type='submit' className='search-button' onClick={(e)=> handleSubmit(e)}><i className="fas fa-search"></i>Buscar</button>
        </div>
    )
}