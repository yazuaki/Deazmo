import {ADD_ACTIVITY, DELETE_ACTIVITY} from '../actions/types'

const initialState = {
    activityForm:[]
}

const activityReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ACTIVITY:
           return {
                ...state,
                activityForm: state.activityForm.concat({
                key: Math.random(),
                name: action.name,
                info: action.info,
                req: action.req,
                size: action.size,
                category: action.category
            })
           }
            // return;
        case DELETE_ACTIVITY:
            return{
                ...state,
                activityForm: state.activityForm.filter((item)=>
                item.key !== key)
            };
        default:
            return state;
    }
}

export default activityReducer;