import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>

          <NavLink to='/friends'>Friends</NavLink>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <button
        className='btn btn-primary flex justify-center'
        onClick={() => {
          navigate("/title/:titleId");
        }}>
        See More Details
      </button>
    </div>
  );
};

export default Cards;
