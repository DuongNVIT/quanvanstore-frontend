import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    hasNew: false,
    list: []
}

const pushNotification = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PUSH_NOTIFICATION:
            return {
                hasNew: true,
                list: [
                    action.payload,
                    ...state.list
                ]
            }

        default:
            return state;
    }
}

export default pushNotification;