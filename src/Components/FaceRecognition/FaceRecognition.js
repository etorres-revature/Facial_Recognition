import React from "react";

const FaceRecognition = ({imageURL}) => {
  return (
    <div className="center">
      <img
        src={imageURL}
        alt="facial recognition"
      />
    </div>
  );
};

export default FaceRecognition;
