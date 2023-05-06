import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";

export default function EditProfile({ profile }) {
  const [nickname, setNickname] = useState(profile?.nickname);
  const [phone, setPhone] = useState(profile?.phone);
  const [country, setCountry] = useState(profile?.country);
  const [city, setCity] = useState(profile?.city);
  const [address, setAddress] = useState(profile?.address);
  const [neighborhood, setNeighborhood] = useState(profile?.neighborhood);
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Cargando...</div>;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(user.sub);
    const updatedProfile = {
      nickname,
      phone,
      country,
      city,
      address,
      neighborhood,
    };
    try {
      const response = await axios.put(`http://localhost:3001/users/edit/${user.sub}`, updatedProfile);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <h1>Bienvenido {user.name}</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nickname">Nickname</label>
      <input type="text" id="nickname" value={nickname || ''} onChange={(event) => setNickname(event.target.value)} />

      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone" value={phone || ''} onChange={(event) => setPhone(event.target.value)} />

      <label htmlFor="country">Country</label>
      <input type="text" id="country" value={country || ''} onChange={(event) => setCountry(event.target.value)} />

      <label htmlFor="city">City</label>
      <input type="text" id="city" value={city || ''} onChange={(event) => setCity(event.target.value)} />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" value={address || ''} onChange={(event) => setAddress(event.target.value)} />

      <label htmlFor="neighborhood">Neighborhood</label>
      <input type="text" id="neighborhood" value={neighborhood || ''} onChange={(event) => setNeighborhood(event.target.value)} />

      <button type="submit">Save</button>
    </form>
    </>
  );
}
