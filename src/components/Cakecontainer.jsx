import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from "../redux"

function Cakecontainer(props) {
  return (
    <div>
      <h1>Number of cakes-{props.numOfCakes}</h1>
      <button onClick={props.buyCake1}>Buy cake</button>
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
    buyCake1:()=>dispatch(buyCake())
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (Cakecontainer)
