import React from "react";

function SingleCat({ name, latinName, image }) {
  return (
    <li>
      <h2>{name}</h2>
      <p>{latinName}</p>
      <img src={image} alt={`${name} image`} width="200" />
    </li>
  );
}

export default SingleCat;