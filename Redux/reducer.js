
import { PROYECTOS } from './types';


const initialState = {
    proyectos: [],
    habilidades: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case PROYECTOS:{
            return{
                ...state,
                proyectos: action.payload
            }
        }
        default:
            return {...state}
    }
}

export default reducer