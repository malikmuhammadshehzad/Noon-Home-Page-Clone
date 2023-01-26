import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DealCard(props) {
  return (
    <>
      <div>
        <Card sx={{ height: 200, width: 200, marginBottom: 2 }}>
          <CardMedia
            sx={{ height: 200, width: 200 }}
            image={props.Dealitem.imgUrl}
            title="green iguana"
          />
          {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Dealitem.heading}
          </Typography>
          <Typography variant="body2" color="black">
            {props.Dealitem.discription}
          </Typography>
        </CardContent> */}
          {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </div>
    </>
  );
}
