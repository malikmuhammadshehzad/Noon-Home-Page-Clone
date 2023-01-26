import { height, margin } from "@mui/system";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
export default function Link() {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          height: "112px",
          margin: "15px 0px 25px 0px",
          padding: "20px 0px 20px 0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "50%",
            alignItems: "center",
            // backgroundColor: "hotpink",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              marginLeft: "42%",

              marginBottom: "10px",
              fontWeight: "2000px",
            }}
          >
              <Typography variant="h6"> SHOP ON THE GO</Typography>
           
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "35%",
              height: "40px",
              width: "122px",
            }}
          >
            <img src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" />{" "}
            <img src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "25%",

           
            marginTop: "5px",
          }}
        >
          <div
            style={{
              
              fontSize: "15px",
              marginBottom: "10px",
              fontWeight: "1000px",
            
            }}
          >
            <Typography variant="h6">CONNECT WITH US</Typography>
          </div>
          <div
            style={{
              display: "flex",
          
              height: "45px",
              width: "22px",
              border: "22px",
            }}
          >
            {" "}
            <img
              style={{ borderRadius: "22px", marginRight:"6px" }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968982.png"
            />
            <img
              style={{   borderRadius: "22px",  marginRight:"6px"  }}
              src="https://cdn-icons-png.flaticon.com/512/60/60580.png"
            />
            <img
              style={{ borderRadius: "22px",marginRight:"6px" }}
              src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
            />
            <img
              style={{ borderRadius: "22px" }}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
