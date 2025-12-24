import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
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
  const isMobile = useMediaQuery("(max-width:1000px)");
  const [open, setOpen] = useState(false);

  const drawerTextStyle = {
    color: "#ccc",
    fontFamily: "Avenir",
    fontSize: "14px",
    cursor: "pointer",
  };

  const drawerTextHover = {
    "&:hover": {
      color: "#fff",
      transition: "color 0.2s",
    },
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#26262B" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "unset !important",
            marginTop: "17px !important",
            px: { xs: "16px", sm: "40px" }
          }}
        >
          {/* Logo */}
          <img src="/Images/logo.svg" alt="Logo" style={{ height: "40px" }} />

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {navItems.map((item) => (
                <p
                  key={item}
                  className="cursor-pointer text-[#ccc] font-['Avenir'] text-[14px] hover:text-white transition-colors duration-200"
                >
                  {item}
                </p>
              ))}

              <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <img src="/Images/line.svg" alt="" />
                <img src="/Images/flag.svg" alt="" />
                <p
                  style={{
                    cursor: "pointer",
                    color: "#ccc",
                    fontFamily: "Avenir",
                    fontSize: "14px",
                    margin: 0
                  }}
                >
                  Sign in
                </p>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ccc",
                    borderColor: "#fff",
                    borderRadius: "6px",
                    width: "101px",
                    height: "33px",
                    textTransform: "none",
                    fontFamily: "Avenir",
                    fontSize: "14px"
                  }}
                >
                  Try free
                </Button>
              </Box>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#26262B", color: "#ccc", width: 280, p: 2 },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ ...drawerTextHover }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: { ...drawerTextStyle },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton sx={{ ...drawerTextHover }}>
              <ListItemText
                primary="Sign in"
                primaryTypographyProps={{
                  sx: { ...drawerTextStyle },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: "6px",
                borderColor: "#fff",
                color: "#ccc",
                mt: 1,
                textTransform: "none",
                fontFamily: "Avenir",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#26262B",
                  borderColor: "#fff",
                },
              }}
            >
              Try free
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
