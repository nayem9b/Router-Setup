import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const PostDetails = () => {
  const params = useParams();
  const { postId } = params;
  // const { id, title, body, userId } = post;
  return (
    <div>
      <h1>Post details of picture`${postId}`</h1>
    </div>
  );
};

export default PostDetails;
