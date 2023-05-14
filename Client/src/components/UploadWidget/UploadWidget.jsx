import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVehiclePhotoForReservationURL } from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;

const UploadWidget = () => {
    const dispatch = useDispatch();
    let widget = {};

    useEffect(() => {
        widget = window.cloudinary.createUploadWidget({
            cloudName: VITE_CLOUD_NAME,
            uploadPreset: VITE_UPLOAD_PRESET
        }, (error, result) => {
            if (!error && result && result.event === 'success') {
                dispatch(setVehiclePhotoForReservationURL(result.info.secure_url));
            }
        });
    }, [widget, dispatch]);

    const handleClick = () => {
        widget.open();
    };

    return (
        <button type='button' onClick = { handleClick }>
            Cargar Foto
        </button>
    )
};

export default UploadWidget;


// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setVehiclePhotoForReservationURL } from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

// const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;

// const UploadWidget = () => {
//     const dispatch = useDispatch();
//     let widget = {};

//     useEffect(() => {
//         widget = window.cloudinary.createUploadWidget({
//             cloudName: VITE_CLOUD_NAME,
//             uploadPreset: VITE_UPLOAD_PRESET
//         }, (error, result) => {
//             if (!error && result && result.event === 'success') {
//                 dispatch(setVehiclePhotoForReservationURL(result.info.secure_url));
//             }
//         });
//     }, [widget, dispatch]);

//     const handleClick = () => {
//         widget.open();
//     };

//     return (
//         <button type='button' onClick = { handleClick }>
//             Cargar Foto
//         </button>
//     )
// };

// export default UploadWidget;