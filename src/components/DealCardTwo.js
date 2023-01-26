import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Margin } from "@mui/icons-material";

export default function ActionAreaCard(props) {
  console.log("img");
  return (
    <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 200, width: 200 }}
          component="img"
          image={props.itemtwo.img}
          alt="green iguana"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
}
