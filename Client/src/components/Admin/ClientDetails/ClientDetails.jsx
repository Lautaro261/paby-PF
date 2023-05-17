import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { userDetails, clearDetails } from '../../../redux/features/admin/adminSlice'

const ClientDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.admin.userDetails)
    const {sub} = useParams()

    useEffect(() => {
        console.log('soy useEffect en clientsDetails', sub , token) 
        dispatch(userDetails({sub, token}))
        return function clean(){
            dispatch(clearDetails())
        }
    }, [dispatch, sub])
    return (
        <div>
            <div>
                <button onClick={() => navigate('/admin/clients')}>X</button>
                <h2>Cliente {user?.userById?.name}</h2>
                <p>Apodo:{user?.profileById?.nickname}</p>
                <p>Email:{user?.userById?.email}</p>
                <p>Telefono:{user?.profikeById?.email}</p>
                <p>País: {user?.profileById?.country}</p>
                <p>Ciudad: {user?.profileById?.city}</p>
                <p>Dirección: {user?.profileById?.address}</p>
                <p>Vecindario: {user?.profileById?.neighborhood}</p>
            </div>
        </div>
    )
}

export default ClientDetails