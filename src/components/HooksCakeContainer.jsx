import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'


const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <>
     <h1>Number of cakes - {numOfCakes}</h1> 
     <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </>
  )
}

export default HooksCakeContainer
