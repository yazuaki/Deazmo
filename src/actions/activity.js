import {ADD_ACTIVITY, DELETE_ACTIVITY} from './types'

export const addActivity = (name,  info, req, size, category) => ( 
    {
    type: ADD_ACTIVITY,
    name: name,
    info: info,
    req: req,
    size: size,
    category: category
    }
);

export const deleteActivity = (key) => ( 
    {
    type: DELETE_ACTIVITY,
    key: key
    }
);