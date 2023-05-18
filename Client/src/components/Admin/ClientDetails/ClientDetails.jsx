import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { userDetails, clearDetails } from '../../../redux/features/admin/adminSlice'
import styles from './ClientDetails.module.css'

const ClientDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.admin.userDetails)
    const { sub } = useParams()

    useEffect(() => {
        console.log('soy useEffect en clientsDetails', sub, token)
        dispatch(userDetails({ sub, token }))
        return function clean() {
            dispatch(clearDetails())
        }
    }, [dispatch, sub])
    return (
        <div>
            <div className={styles.clientDetailsCointeinter}>
                <button onClick={() => navigate('/admin/clients')}>X</button>
                <h2>Cliente {user?.userById?.name}</h2>
                <label>Apodo: <p>{user?.profileById?.nickname}</p></label>
                <label>Email: <p>{user?.userById?.email}</p></label>
                <label>Telefono: <p>{user?.profikeById?.email}</p></label>
                <label>País: <p>{user?.profileById?.country}</p></label>
                <label>Ciudad: <p>{user?.profileById?.city}</p></label>
                <label>Dirección: <p>{user?.profileById?.address}</p></label>
                <label>Vecindario: <p>{user?.profileById?.neighborhood}</p></label>
            </div>
        </div>
    )
}

export default ClientDetails