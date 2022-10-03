import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
const Title = ({ image, downloads }) => {
  const params = useParams();
  const { titleId } = params;
  return (
    <div>
      <h1>Hi everybody{titleId}</h1>
    </div>
  );
};

export default Title;
