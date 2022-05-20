import { useState } from 'react'
import './App.css'
import AddHotel from './components/AddHotel'
// import ResCard from './components/ResCard'
import ResDet from './components/ResDet'

function App() {
  const [add, setAdd]= useState(false);
 

  return (
    <div className="App">
     {add ? <AddHotel/> : null}
     <button onClick={()=>{setAdd(!add)}}>AddData</button>
      {/* <ResCard/> */}
      <ResDet/>
     
    </div>
  )
}

export default App
