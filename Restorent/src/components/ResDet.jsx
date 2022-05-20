import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./css/resdet.css";

const ResDet = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [v, setV] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/data?_page=${page}&_limit=5`)
      .then((e) => setData(e.data));
  }, [page]);

  // useEffect(()=>{
  //   axios.get(`http://localhost:8080/data`).then((e)=>setV(e.data));
  // },[]);

  // sort
  const handle = () => {
    const a = document.getElementById("df").value;
    if (a == "high") {
      let newData = [...data].sort((a, b) =>
        parseFloat(Number(b.rating) - parseFloat(Number(a.rating)))
      );
      setData(newData);
    }
    if (a == "low") {
      let newData = [...data].sort((a, b) =>
        parseFloat(Number(a.rating) - parseFloat(Number(b.rating)))
      );
      setData(newData);
    }
  };

  const handleChnage = () => {
    const a = document.getElementById("gh").value;
    if (a == "high") {
      let newData = [...data].sort((a, b) =>
        parseFloat(Number(b.cost) - parseFloat(Number(a.cost)))
      );
      setData(newData);
    }
    if (a == "low") {
      let newData = [...data].sort((a, b) =>
        parseFloat(Number(a.cost) - parseFloat(Number(b.cost)))
      );
      setData(newData);
    }
  };

  // filetr
  const handleCh = () => {
    // console.log(data);
    const b = document.getElementById("vg").value;
    const d = [...data].filter((e) => Number(e.rating) <= Number(b));
      setData(d);
  };

  const haf = ()=>{
    const b = document.getElementById("lg").value;
    const d = [...data].filter((e) => Number(e.cost) <= Number(b));
      setData(d);
  }
  const hafl = ()=>{

  }
  return (
    <>
      <div className="main-08">
        <div>
          <select name="" id="df" onClick={handle}>
            <option value="">Sort By Rating</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
        <div>
          <select name="" id="gh" onClick={handleChnage}>
            <option value="">Sort By Price</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
        <div>
        <select name="" id="vg" onClick={handleCh}>
            {/* <option >Filter by Rating</option> */}
            <option value="10">Filter by Rating</option>
            <option value="5">5 star</option>
            <option value="4">4 star</option>
            <option value="3">3 star</option>
            <option value="2">2 star</option>
          </select>
        </div>
        <div>
          <select name="" id="lg" onClick={haf}>
            <option value="5000">Filter by Price</option>
            <option value="1000">1000₹</option>
            <option value="800">800₹</option>
            <option value="500">500₹</option>
            <option value="400">400₹</option>
          </select>
        </div>
        <div>
          <select name="" id="mg" onClick={hafl}>
            <option value="">Filter by contry</option>
            <option value="India">India</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="London">London</option>
          </select>
        </div>
      </div>
      <div className="main-09">
        {data.map((e) => (
          <div>
            <div className="main-10">
              <div className="img-1">
                <img src={e.image} alt="" />
              </div>
              <div className="main-11">
                <h3>{e.name}</h3>
                <p className="jk">Categary : {e.cat}</p>
                <p className="jk">Price : {e.cost}₹</p>
                <p>
                  Payment Accecpt :{" "}
                  <span
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {e.payment_methods}
                  </span>
                </p>
              </div>
              <div className="12">
                <p className="rh">Rating : {e.rating}*</p>
                <p className="rh">Votes : {e.votes}</p>
                <p className="rh">Reviews : {e.reviews}</p>
              </div>
            </div>
            <div className="uj">
              <div>Book Now</div>
            </div>
          </div>
        ))}
      </div>
      <div className="fg">
        <div
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          prev
        </div>
        <div
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </div>
        <div
          onClick={() => {
            if (page < data.length - 1) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default ResDet;
