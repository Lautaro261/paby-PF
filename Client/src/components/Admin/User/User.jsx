import React from "react";
import { Link } from "react-router-dom";

const User = ({sub, name, email}) => {

return ( 
    <div>
        <Link to={`/admin/clients/details/${sub}`}>
            <p>{name}</p>
            <p>{email}</p>
        </Link>
        <button>Bannear</button>
    </div>
)
}

export default User