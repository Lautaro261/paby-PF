import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import styles from './EditProfile.module.css'

export default function EditProfile({ profile }) {
  const [nickname, setNickname] = useState(profile?.nickname);
  const [phone, setPhone] = useState(profile?.phone);
  const [country, setCountry] = useState(profile?.country);
  const [city, setCity] = useState(profile?.city);
  const [address, setAddress] = useState(profile?.address);
  const [neighborhood, setNeighborhood] = useState(profile?.neighborhood);
  const { isLoading } = useAuth0();
  const user = {"sub": localStorage.getItem(`sub`),
  "name": localStorage.getItem(`name`),
  "photo":localStorage.getItem(`photo`),
  "email":localStorage.getItem(`email`),}
  if (isLoading) {
    return <div>Cargando...</div>;
  };
  
  async function handleSubmit(event) {
  event.preventDefault();
  //console.log(user.sub);
  const updatedProfile = {
    sub: user.sub,
    nickname,
    phone,
    country,
    city,
    address,
    neighborhood,
  };
  
  try {
    const response = await axios.put(
      '/users/edit/',
      JSON.stringify(updatedProfile), // convertir objeto a JSON
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
    console.error(error.response.data);
    console.error(error.response.status);
  }
}


  return (
    <div className={styles.conteinerEditProfile}>
    <h1>Bienvenido {user.name}</h1>
    <form onSubmit={handleSubmit} className={styles.formEditProfile}>
      <label htmlFor="nickname">Nickname:</label>
      <input type="text" id="nickname" value={nickname || ''} onChange={(event) => setNickname(event.target.value)} />

      <label htmlFor="phone">Telefono:</label>
      <input type="text" id="phone" value={phone || ''} onChange={(event) => setPhone(event.target.value)} />

      <label htmlFor="country">Pais</label>
      <input type="text" id="country" value={country || ''} onChange={(event) => setCountry(event.target.value)} />

      <label htmlFor="city">Ciudad</label>
      <input type="text" id="city" value={city || ''} onChange={(event) => setCity(event.target.value)} />

      <label htmlFor="address">Direccion:</label>
      <input type="text" id="address" value={address || ''} onChange={(event) => setAddress(event.target.value)} />

      <label htmlFor="neighborhood">Vecindario:</label>
      <input type="text" id="neighborhood" value={neighborhood || ''} onChange={(event) => setNeighborhood(event.target.value)} />

      <button type="submit">Guardar Cambios</button>
    </form>
    </div>
  );
}
