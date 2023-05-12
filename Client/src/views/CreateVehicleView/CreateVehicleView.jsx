import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import CreateVehicle from "../../components/CreateVehicle/createVehicle";

const CreateVehicleView = () => {
    return (
        <div>
            <div><Navbar /> </div>

                <div><Dash /></div>
            <div>
                <div><CreateVehicle/></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}

export default CreateVehicleView