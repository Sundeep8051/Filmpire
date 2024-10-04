import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
  ClassRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import useStyles from "./style";
import { useTheme } from "@mui/material/styles";
import { Sidebar } from "../index";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px");
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen(() => !mobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fman-avatar&psig=AOvVaw2fuCEtqeN70OT4aSNoDoAw&ust=1728124407853000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD5yK3D9IgDFQAAAAAdAAAAABAE"
                />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClick={() => setMobileOpen(() => !mobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
