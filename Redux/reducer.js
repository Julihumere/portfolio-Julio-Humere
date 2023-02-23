
import { PROYECTOS, HABILIDADES } from './types';


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
        case HABILIDADES:{
            return{
                ...state,
                habilidades: action.payload
            }
        }
        default:
            return {...state}
    }
}

export default reducer