import { BUY_ICECREAM } from "./iceCreamTypes";

const initialstate = {
    numOfIcecreams:25
}

const iceCreamReducer = (state=initialstate,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }
        default:return state
    }
}

export default iceCreamReducer