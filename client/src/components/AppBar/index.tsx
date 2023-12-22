import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { alpha } from "@mui/material";
import { Logo } from "./style";
import { LogoMoves } from "assets";
import Image from "next/image";
import media from "styled-media-query";
import { Link } from "react-scroll";

const pages = ["home", "sobre", "serviços", "time", "contato"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{ backgroundColor: alpha("#6EB6B4", 0.5) }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
           
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
                fontFamily: "Lato"
              },
            }}
          >
            <Image className="LogoS" src={LogoMoves} alt="Logo Moves" width={214} height={99} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#004A8C", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "space-between",
                color: "#004A8C"
              },
            }}
          >

            <Image className="LogoS" src={LogoMoves} alt="Logo Moves" width={136} height={63} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page} to={page} smooth={true} duration={500}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;