import { combineReducers } from "redux";
import productFilter from "./productReducer";
import alert from "./alertReducer";
import pushNotification from "./pushNotificationReducer";

const rootReducer = combineReducers({
    productFilter,
    alert,
    pushNotification
})

export default rootReducer;