import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
export default function ActionAreaCard(props) {
  return (
    <>
      <img
        src={props.itemM.image}
        height="215"
        width="175px"
        alt="green iguana"
      />
    </>
  );
}

{
  /* <Card sx={{ maxWidth: 175,maxHeight:215 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="215"
    width="175px"
    image={props.itemM.image}
    alt="green iguana"
  />
</CardActionArea>
</Card> */
}
