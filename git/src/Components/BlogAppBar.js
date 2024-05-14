import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";

function BlogAppBar() {
  const [opendrawer, setopendrawer] = React.useState(false);
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            size="larger"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => {
              setopendrawer(!opendrawer);
            }}
          >
            <MenuIcon />
          </IconButton>

          <h1 style={{ color: "#fff", fontFamily: "Rubik Doodle Shadow" }}>
            The BloG
          </h1>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={opendrawer}
        onClose={() => setopendrawer(false)}
        // PaperProps={{
        //   sx: {
        //     height: "calc(100% - 64px)",
        //     top: 64,
        //   },
        // }}
      >
        <Box
          sx={{
            width: { xs: "180px", sm: "200px", md: "270px", lg: "400px" },
            backgroundColor: "red",
            height: "100vh",
          }}
        >
          <h1>afewf</h1>
        </Box>
      </Drawer>
    </Box>
  );
}

export default BlogAppBar;
