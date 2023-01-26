import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{backgroundColor:"#FEEE00", color:"black"}} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img
                  style={{
                    height: "22px",
                    alignSelf: "center",
                  }}
                  src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                />
              </Typography>
              <input
                style={{
                  alignSelf: "center",
                  width: "784px",

                  padding: "12px 12px 12px 12px",
                  marginLeft: "12px",
                  border: "2px solid black",
                  borderRadius: "7px",
                }}
                placeholder="What are you looking for?"
              />
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <Typography textAlign={"center"} color={"corol"}>
                  Sign in
                </Typography>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-label="account of current user"
                  //   aria-controls={menuId}
                  aria-haspopup="true"
                  //   onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Person2OutlinedIcon />
                  <Typography
                    style={{
                      marginRight: "10px",
                      padding: "12px",
                    }}
                  >
                    Cart
                  </Typography>
                </IconButton>
                <ShoppingCartOutlinedIcon />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}

export default Navbar;
