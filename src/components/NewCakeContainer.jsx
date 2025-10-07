import React , {use, useState} from 'react'
import { connect } from 'react-redux'
import {buyCake} from "../redux"

function NewCakeContainer(props) {
    const [number,setNumber] = useState()
  return (
    <div>
      <h1>Number of cakes-{props.numOfCakes}</h1>
      <input type="text" value={number} onChange={e=>setNumber(e.target.value)} placeholder='Enter number of cakes'/>
      <button onClick={()=>props.buyCake1(number)}>Buy {number} cakes</button>
    </div>
  )
}

// It change the numOfCakes state in props so when we click on the button so it change the state of the store object props.numOfCakes
const mapStateToProps=(state)=>{
  return{
    numOfCakes:state.cake.numOfCakes
  }
}

// It create a buyCake prop which is a function so it create props.buyCake prop
const mapDispatchToProps=(dispatch)=>{
  return{
    buyCake1:(number)=>dispatch(buyCake(number))
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)
