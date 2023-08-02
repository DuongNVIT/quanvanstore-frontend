import * as ActionTypes from '../constants/ActionTypes';

export const pushNotification = (notification) => {
    return {
        type: ActionTypes.PUSH_NOTIFICATION,
        payload: notification
    }
}