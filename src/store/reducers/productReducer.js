import * as ActionTypes from './../constants/ActionTypes'

const initialState = {
    name: "",
    categoryId: "",
    startPrice: "",
    endPrice: "",
    page: "",
    size: ""
}

const productFilter = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_PRODUCT_FILTER:
            return {
                ...action.payload
            }

        default:
            return state;
    }
}

export default productFilter;