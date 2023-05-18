import React, { useEffect }from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Home from "../../components/Home/Home";
import styles from './HomeView.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from "react-redux";
import { setUserSession } from "../../redux/features/users/usersSlice";

const HomeView = () => {
    const { isAuthenticated } = useAuth0();
    
 const dispatch = useDispatch()
//  const isLoggedIn = localStorage.getItem(`isLoggedIn`)
 const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      dispatch(setUserSession());
    }
  }, [dispatch]);
    

    return (
        <div className={styles.container}>
            <div><Navbar /> </div>
            <div>{isAuthenticated || isLoggedIn ? <Dash />: null}</div>
            <div>
                <div ><Home /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default HomeView