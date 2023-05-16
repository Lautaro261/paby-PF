import React from "react";
import { Link } from "react-router-dom";

const User = ({sub, name, email}) => {

return ( 
    <div>
        <Link to={`to=/admint/clients/details/${sub}`}>
            <p>{name}</p>
            <p>{email}</p>
        </Link>
    </div>
)
}

export default User