import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cakecontainer from './components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import Icecreamcontainer from './components/Icecreamcontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Provider store={store}>
   <Cakecontainer/>
   <HooksCakeContainer/>
   <Icecreamcontainer/>
   </Provider>
    </>
  )
}

export default App
