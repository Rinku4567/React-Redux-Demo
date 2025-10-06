import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIcecream } from '../redux'

const Icecreamcontainer = () => {
   const numOfIceCream = useSelector(state=>state.iceCream.numOfIcecreams)
   const dispatch = useDispatch()
  return (
    <>
      <h1>Number of Icecreams: {numOfIceCream} </h1>
      <button onClick={()=>dispatch(buyIcecream())}>Buy Icecream</button>
    </>
  )
}


export default Icecreamcontainer
