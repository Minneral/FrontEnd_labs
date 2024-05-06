import { combineReducers } from "redux";
import { StoreType, VacancyType } from "../types";
import vacancyList from "../Vacancies";

const initialState: StoreType = {
    vacancies: vacancyList,
    selectedVacancy: 0
}
const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LIKE_VACANCY':
            let vac = state.vacancies.map(item => {
                if (action.id == item.id)
                    return { ...item, liked: !item.liked }
                else
                    return item;
            })
            return {...state, vacancies: vac}
        case 'SELECT_VACANCY':
            return { ...state, selectedVacancy: action.id };
        default:
            return state;
    }
}

export default rootReducer;