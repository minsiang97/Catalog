import { combineReducers } from "redux";
import Airing from './Airing'
import Complete from "./Complete";
import Upcoming from "./Upcoming";

const rootReducer = combineReducers({
    airing: Airing,
    complete: Complete,
    upcoming: Upcoming
})

export default rootReducer