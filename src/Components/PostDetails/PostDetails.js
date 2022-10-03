import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const PostDetails = ({ image }) => {
  const { id } = image;

  // const { id, title, body, userId } = post;
  return (
    <div>
      <h1>Post details of picture {id}</h1>
    </div>
  );
};

export default PostDetails;
