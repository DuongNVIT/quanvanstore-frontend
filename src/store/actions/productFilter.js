import * as ActionTypes from "./../constants/ActionTypes";

export const updateProductFilter = (productFilter) => {
    return {
        type: ActionTypes.UPDATE_PRODUCT_FILTER,
        payload: productFilter
    }
}