import React from "react";

const ImageComponent = (props) => {
  return (
    <div className="col-md">
      <img
        className="img-fluid w-100 h-100"
        src={props.imageUrl}
        alt="showcase"
      />
    </div>
  );
};

export default ImageComponent;
