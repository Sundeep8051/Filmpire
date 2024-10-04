import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./style";

const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "New Releases", value: "new_releases" },
  { label: "Trending", value: "trending" },
  { label: "Cult Movies", value: "cult" },
  { label: "Documentaries", value: "documentary" },
  { label: "Series", value: "series" },
];

const demoCategories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "New Releases", value: "new_releases" },
  { label: "Trending", value: "trending" },
  { label: "Cult Movies", value: "cult" },
  { label: "Documentaries", value: "documentary" },
  { label: "Series", value: "series" },
];

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : redLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={20}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={20}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
