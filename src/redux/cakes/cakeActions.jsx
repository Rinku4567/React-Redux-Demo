import { BUY_CAKE } from "./cakeTypes"

// action creator function
export const buyCake=(number)=>{
  return{
    type: BUY_CAKE,
    payload:number
  }
}