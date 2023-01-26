import React from "react";

export default function CategoryCard(props) {
  // console.log("imgLInk:", props.imgLink);
  return (
    <div
    
    >
      <img   style={{
        height: "140px",
        width:"95px"
       
      }} src={props.imgLink} />
    </div>
  );
}
