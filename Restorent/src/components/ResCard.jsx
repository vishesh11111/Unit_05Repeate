import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/rescard.css';
const ResCard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/data`).then((e) => { setData(e.data) });
  }, [])
  return (
    <div className='main'>
      {data.map((e) => (
        <div className='hg'>        
        <div className='main-1'>
          <div className='img-1'> <img src={e.image} alt="" /> </div>
          <div className='main-2'>

            <h2>{e.name}</h2>
            <p>{e.cat}</p>
            <p>{e.cost}</p>
            <p>{e.cost_for_two}</p>
            <div className='main-3'>
              <p>{e.time}</p>
              <p>{e.min}</p>
            </div>
          </div>
          <div className='main-3'>
            <h5>{e.rating}</h5>
            <p>{e.reviews}</p>
            <p>{e.votes}</p>
          </div>
        </div>
          <div><p>{e.payment_methods}</p></div>
        </div>
      ))}
    </div>
  )
}

export default ResCard