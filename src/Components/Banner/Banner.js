import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Banner = ({ image }) => {
  const navigate = useNavigate();
  //   const tags = image.tags.split(",");
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl my-10'>
        <figure>
          <img src={image.webformatURL} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h3 className='card-title'>Photo By {image.user}</h3>
          <div className='avatar'>
            <div className='w-9 rounded-full'>
              <img src={image.userImageURL} alt='' />
            </div>
          </div>
          <p>
            {" "}
            <span className='text-violet-500'> Views:</span> {image.views}
          </p>
          <p>
            {" "}
            <span className='text-fuchsia-500'> Likes:</span> {image.likes}
          </p>
          <p>
            {" "}
            <span className='text-purple-400'> Comments:</span> {image.comments}
          </p>

          <div className='card-actions justify-end'>
            {/* {tags.map((tag, index) => (
              <div key={index} className='badge badge-outline'>
                #{tag}
              </div>
            ))} */}
          </div>
          <button
            className='btn btn-primary'
            onClick={() => {
              navigate("/title");
            }}>
            See More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
