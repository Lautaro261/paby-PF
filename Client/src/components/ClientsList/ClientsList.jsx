import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, getAllUserForAdmin } from "../../redux/features/admin/adminSlice";

const ClientsList = () => {
    const dispatch = useDispatch();
    const adminCredentials = {
        sub: "armandoAdmin@gmail.com",
        email: "armandoAdmin@gmail.com",
        password: "soyeladmin19"
    };

    const adminAuth = useSelector(state => state.admin.adminAuth);

    useEffect(() => {
        dispatch(loginAdmin(adminCredentials));
    }, []);

    return (
        <div>
            { adminAuth && adminAuth.rol }
        </div>
    );
};

export default ClientsList;