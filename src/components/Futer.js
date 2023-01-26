import React from "react";

export default function Futer(props) {
  console.log("item");
  return (
    <>
      <div
        style={{
          padding: "10px",
          // backgroundColor: "coral",
          // display: "flex",
          // flexDirection: "row",
        }}
      >
        {props.item.name}
      </div>
    </>
  );
}
