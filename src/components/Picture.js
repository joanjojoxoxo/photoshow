import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <center>
        <p className="p2">Photographer : {data.photographer}</p>
        <div className="imageContainer">
          <img src={data.src.large} alt="" />
        </div>
          {/* 下載圖片*/}
          <a target="_blank" href={data.src.large} >
            <p className="a5">
              Download Image
            </p>
          </a>
      </center>
    </div>
  );
};

export default Picture;
