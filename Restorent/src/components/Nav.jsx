import React from 'react'
import './css/nav.css'

const SortNav = ({ getData, data }) => {
  const ratingHandler = (val) => {
    let desiredData = data
      .filter((el) => parseFloat(el.rating) >= val)
      .sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    getData(desiredData);
  };

  return (
    <>
      <div className="sortByRating">
        <button onClick={() => ratingHandler(1)}>1 Star</button>
        <button onClick={() => ratingHandler(2)}>2 Star</button>
        <button onClick={() => ratingHandler(3)}>3 Star</button>
        <button onClick={() => ratingHandler(4)}>4 Star</button>
      </div>
    </>
  );
};

export default SortNav;