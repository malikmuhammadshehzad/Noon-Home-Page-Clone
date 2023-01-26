import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function TreandingDeal(props) {
  console.log("T img");
  return (
    <>
      <Card sx={{ maxWidth: 207, height: 454 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ objectFit: "contain" }}
            height="100%"
            image={props.itemT.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.itemT.heading}
            </Typography>
            <Typography variant="body2" color="black">
              {props.itemT.discription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
