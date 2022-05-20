import React from 'react'
import axios from 'axios';
// import { useState } from 'react'
const AddHotel = () => {
   const [inp1,setInp1]=React.useState("");
   const [inp2,setInp2]=React.useState("");
   const [inp3,setInp3]=React.useState("");
   const [inp4,setInp4]=React.useState("");
   const [inp5,setInp5]=React.useState("");
   const [inp6,setInp6]=React.useState("");
   const [inp7,setInp7]=React.useState("");
   const [inp8,setInp8]=React.useState("");
   const [inp9,setInp9]=React.useState("");
   const [inp10,setInp10]=React.useState("");
   const [inp11,setInp11]=React.useState("");

   const payload={

        name :  inp1,
        cat  :  inp2,
        cost : inp3,
        cost_for_two : inp4,
        time  : inp5,
        image : inp6,
        min  : inp7,
        votes : inp8,
        reviews : inp9,
        rating : inp10,
        payment_methods : inp11,

   }

   const handleInput =(e)=>{
      e.preventDefault();
     axios.post(`http://localhost:8080/data`,payload).then((e)=>{console.log(e)})
    // fetch(`http://localhost:8080/data`, {
    //   method : "POST",
    //   headers : {
    //     "content-type" : "application/json",
    //   },
    //   body : JSON.stringify(payload)
    // })
   }

   
   // "name": "Hauz Khas Social",
   // "cat": "Continental, American, Asian, North Indian",
   // "cost": "800",
   // "cost_for_two":"1600",
   // "time": "25",
   // "image": "https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg",
   // "min": "50",
   // "votes": "7931",
   // "reviews": "1231",
   // "rating": "4",
   // "payment_methods": {
   //   "card": true,
   //   "cash": false,
   //   "upi": true





  return (
    <div>
      <form onSubmit={(e)=>{handleInput(e)}}>
        <input type="text" placeholder='Resturent Name' onChange={(e)=>setInp1(e.target.value)}/>
        <select name="" id="" onChange={(e)=>setInp2(e.target.value)}>
          <option value="">Select Country</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="Indian">Indian</option>
        </select>
        <input type="text"  placeholder='Rent' onChange={(e)=>setInp3(e.target.value)}/>
        <input type="text" placeholder='Rent for Two Person' onChange={(e)=>setInp4(e.target.value)}/>
        <input type="text" placeholder='Time' onChange={(e)=>setInp5(e.target.value)}/>
        <input type="text" placeholder='Resturent Image' onChange={(e)=>setInp6(e.target.value)}/>
        <input type="text" placeholder='min' onChange={(e)=>setInp7(e.target.value)}/>
        <input type="text" placeholder='Votes' onChange={(e)=>setInp8(e.target.value)}/>
        <input type="text" placeholder='Reviews'  onChange={(e)=>setInp9(e.target.value)}/>
        <input type="text" placeholder='Rating'  onChange={(e)=>setInp10(e.target.value)}/>
       <select name="" id="" onChange={(e)=>setInp11(e.target.value)}>
         <option value="....">Select Payment Method</option>
         <option value="cash">Cash</option>
         <option value="card">Card</option>
         <option value="upi">UPI</option>
       </select>
       <button type='submit'>Add Hotel</button>
      </form>
    </div>
  )
}

export default AddHotel
