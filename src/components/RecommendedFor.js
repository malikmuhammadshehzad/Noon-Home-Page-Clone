import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RecommendedFor(props) {
  console.log("itemFor", props.itemFor);
  return (
    <>
      <Card sx={{ maxWidth: 190, height: 260 }}>
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="100%"
            image={props.itemFor.imgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
         {props.itemFor.heading}
            </Typography>
            <Typography variant="body2" color="black">
              {props.itemFor.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
