import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    isOpen: false,
    severity: 'success',
    message: 'Thêm thành công vào giỏ!'
}

const alert = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_ALERT_MESSAGE:
            return {
                ...action.payload
            }

        default:
            return state;
    }
}

export default alert;