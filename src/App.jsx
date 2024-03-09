import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handelClick(){
    alert('wrong press')
  }

  function forNumer(num) {
    alert('ok')
  }

  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>



      {/* <Counter></Counter>
      <h3>Rcent learing</h3>
      <button onClick={handelClick}>PUsh me</button>
      <button onClick={() => alert('munna vai tansion nai')}>Item</button>
      <button onClick={forNumer}>for</button> */}
      
    </>
  )
}


// function getSomething (num) { function innerThing (value) { num = value;
// }
// return [num, innerThing]
// }

export default App
