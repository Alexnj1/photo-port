import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

const Gallery = () => {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores. food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img src={photo} className="img-thumbnail mx-1" alt="Commercial Example"></img>
      </div>
    </section>
  );
};

export default Gallery;
