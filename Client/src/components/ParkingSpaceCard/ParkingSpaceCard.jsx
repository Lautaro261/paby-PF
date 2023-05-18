import styles from "./ParkingSpaceCard.module.css";
import { useDispatch } from "react-redux";
import { setSelectedParkingSpace } from "../../redux/features/parkingSpaces/parkingSpacesSlice";

const ParkingSpaceCard = (props) => {
  const {
    parking_space_id,
    parking_space_label,
    vehicle_type,
    parking_space_status,
    order,
    isSelected,
  } = props;
  const dispatch = useDispatch();

  let parkingSpaceCardStatus;
  let buttonAvailability;
  switch (parking_space_status) {
    case "Disponible":
      parkingSpaceCardStatus = styles.parkingSpaceCard__status_available;
      buttonAvailability = true;
      break;
    case "Ocupada":
      parkingSpaceCardStatus = styles.parkingSpaceCard__status_occupied;
      buttonAvailability = false;
      break;
    case "Reservada":
      parkingSpaceCardStatus = styles.parkingSpaceCard__status_reserved;
      buttonAvailability = false;
      break;
    default:
      parkingSpaceCardStatus = "";
  }

  const handleClick = () => {
    const selectedParkingSpace = {
      id: parking_space_id,
      zone_status: parking_space_status,
      zone_number: parking_space_label,
      vehicle_type,
      order,
    };
    dispatch(setSelectedParkingSpace(selectedParkingSpace));
    localStorage.setItem(
      "selectedParkingSpace",
      JSON.stringify(selectedParkingSpace)
    );
  };

  return (
    <div className={styles.parkingSpaceCard__container}>
      <div className={styles.parkingSpaceCard__zoneAndImage}>
        <div className={styles.parkingSpaceCard__label}>Zona No.:</div>
        <div className={styles.parkingSpaceCard__number}>
          {parking_space_label}
        </div>
        <img
          src={`/images/${vehicle_type}.png`}
          alt="Vehicle image"
          className={styles.parkingSpaceCard__image}
        />
      </div>
      <button
        type="button"
        className={
          isSelected
            ? styles.parkingSpaceCard__status_chosen
            : `${parkingSpaceCardStatus}`
        }
        disabled={!buttonAvailability}
        onClick={handleClick}
      >
        {parking_space_status}
      </button>
    </div>
  );
};

export default ParkingSpaceCard;
