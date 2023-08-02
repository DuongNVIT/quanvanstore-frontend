import { Alert, Fade, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';

export default function AlertModal() {
    const data = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(dispatch(updateAlertModal({isOpen: false})));
    };

    return (
        <Snackbar
            open={data.isOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            TransitionComponent={Fade}
        >
            <Alert
                onClose={handleClose}
                severity={data.severity}
                sx={{ width: '100%', fontSize: '1.4rem' }}
            >
                {data.message}
            </Alert>
        </Snackbar>
    );
}
