import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const navItems = [
  "How it works",
  "All apps",
  "Pricing",
  "For Teams",
  "Blog",
  "Podcast"
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#26262B" }}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "unset !important", marginTop: "17px !important", px: "40px !important" }}>

          {/* Logo */}
          <img src="/Images/logo.svg" alt="" />


          {!isMobile && (
            <div
              style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "30px" }}
            >


              {navItems.map((item) => (
                <p
                  key={item}
                  style={{ cursor: "pointer", color: "#ccc", fontFamily: "Avenir", fontSize: "14px" }}
                >
                  {item}
                </p>
              ))}
              {!isMobile ? (
                <div
                  style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "30px" }}
                >
                  <img src="/Images/line.svg" alt="" />
                  <img src="/Images/flag.svg" alt="" />
                  <p
                    style={{ cursor: "pointer", color: "#ccc", fontFamily: "Avenir", fontSize: "14px" }}

                  >Sign in</p>
                  <button
                    style={{ cursor: "pointer", color: "#ccc", fontFamily: "Avenir", width: "101.3px", height: "33.29px", borderRadius: "6px", border: "1px solid #FFFFFF", fontSize: "14px" }}

                  >Try free</button>
                </div>

              ) : (
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}

            </div>
          )}

          {/* Right Side */}

        </Toolbar>
      </AppBar >

      {/* Mobile Drawer */}
      < Drawer anchor="right" open={open} onClose={() => setOpen(false)
      }>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Sign in" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: "20px", mt: 1 }}
              >
                Try free
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer >
    </>
  );
}
