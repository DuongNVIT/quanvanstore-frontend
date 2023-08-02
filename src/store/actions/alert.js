import * as ActionTypes from './../constants/ActionTypes';

export const updateAlertModal = (alert) => {
    return {
        type: ActionTypes.UPDATE_ALERT_MESSAGE,
        payload: alert
    }
}