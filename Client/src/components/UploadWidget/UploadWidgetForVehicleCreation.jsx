import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setVehiclePhotoForCreationURL } from '../../redux/features/vehicles/vehiclesSlice';

const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;

const UploadWidgetForVehicleCreation = () => {
    const dispatch = useDispatch();
    const widgetRef = useRef(null);

    useEffect(() => {
        widgetRef.current = window.cloudinary.createUploadWidget({
            cloudName: VITE_CLOUD_NAME,
            uploadPreset: VITE_UPLOAD_PRESET
        }, (error, result) => {
            if (!error && result && result.event === 'success') {
                dispatch(setVehiclePhotoForCreationURL(result.info.secure_url));
            }
        });
    }, [dispatch]);

    const handleClick = () => {
        widgetRef.current.open();
    };

    return (
        <button type='button' onClick = { handleClick }>
            Cargar Foto
        </button>
    )
};

export default UploadWidgetForVehicleCreation;