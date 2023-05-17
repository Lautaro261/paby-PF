import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserForAdmin } from '../../../redux/features/admin/adminSlice';

export default function UserAdmin() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.admin.allUsers);
  const token = useSelector(state => state.admin.adminAuth )

  useEffect(() => {
    dispatch(getAllUserForAdmin({ token: token.token }));
    console.log(token.token);
}, [dispatch, token]);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Gestionar</th>
        </tr>
      </thead>
      <tbody>
        {allUsers && allUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button onClick={() => handleDetails(user.id)}>Ver detalles</button>
              <label>
                <input
                  type="checkbox"
                  checked={user.active}
                  onChange={(e) => handleBanToggle(user.id, e.target.checked)}
                />
                Banear
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
