import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/material";

export default function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "8px",
          height: " 110px",
          marginTop: "12px",
          marginBottom: "8px",
          backgroundColor: "lightgrey",
          border: "1px solid gray",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // backgroundColor: "lightblue",
            height: "70px",
            width: "885px",
            margin: "8px",
          }}
        >
          {/* <div
            style={{
              fontSize: "21px",
              fontWeight: "700px",
            }}
          > */}
          <Typography variant="h5" fontWeight={"700"}>
            We're Always Here To Help
          </Typography>
          {/* </div> */}
          Reach out to us through any of these support channels
        </div>
        <div
          style={{
            // backgroundColor: "lightgreen",
            height: "70px",
            width: "450px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <InfoIcon
            sx={{
              height: 36,
              width: 36,
              marginTop: 1.5,
              // border: 1,
              marginRight: 1,
            }}
          />
          <div
            style={{
              //   backgroundColor: "coral",
              height: "55px",
              width: "216px",
              alignItems: "center",
              marginTop: "4px",
            }}
          >
            HELP CENTER
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600px",
              }}
            >
              help.noon.com
            </div>
          </div>
          <EmailIcon sx={{ height: 38, width: 38, marginTop: 1.5 }} />
          <div
            style={{
              //   backgroundColor: "pink",
              height: "55px",
              width: "207px",
              marginLeft: "8px",
              marginTop: "4px",
            }}
          >
            EMAIL SUPPORT
            <div
              style={{
                fontSize: "21px",
                fontWeight: "1000px",
              }}
            >
              {" "}
              care@noon.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
