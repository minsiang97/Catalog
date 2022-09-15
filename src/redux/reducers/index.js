import { combineReducers } from "redux";
import Airing from './Airing'
import Complete from "./Complete";
import Upcoming from "./Upcoming";
import Favourites from "./Favourites";

const rootReducer = combineReducers({
    airing: Airing,
    complete: Complete,
    upcoming: Upcoming,
    favourites: Favourites
})

export default rootReducer