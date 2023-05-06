import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function EditProfile(props) {
  // Utiliza el hook useState para almacenar los valores actuales de los datos
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [photo, setPhoto] = useState(props.photo);
  const [nickname, setNickname] = useState(props.nickname);
  const [phone, setPhone] = useState(props.phone);
  const [country, setCountry] = useState(props.country);
  const [city, setCity] = useState(props.city);
  const [password, setPassword] = useState(props.password);
  const [neighborhood, setNeighborhood] = useState(props.neighborhood);

  // Definir una función que maneje el envío del formulario
  function handleSubmit(event) {
    event.preventDefault();
    // Falta añadir lo valores de los datos al servidor o hacer otras cosas con ellos
  }

  // Retornar el formulario con los campos correspondientes
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

      <label htmlFor="photo">Foto:</label>
      <input type="file" id="photo" accept="image/*" onChange={event => setPhoto(event.target.value)} />

      <label htmlFor="nickname">NickName:</label>
      <input type="text" id="nickname" value={nickname} onChange={event => setNickname(event.target.value)} />

      <label htmlFor="phone">Telefono:</label>
      <input type="tel" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />

      <label htmlFor="country">Pais:</label>
      <input type="text" id="country" value={country} onChange={event => setCountry(event.target.value)} />

      <label htmlFor="city">Ciudad:</label>
      <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />

      <label htmlFor="neighborhood">Vecindario:</label>
      <input type="text" id="neighborhood" value={neighborhood} onChange={event => setNeighborhood(event.target.value)} />

      <button type="submit">Guardar cambios</button>
    </form>
  );
}

// Definir las props que el componente espera recibir
EditProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired
};
