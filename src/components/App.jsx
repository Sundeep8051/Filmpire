import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
  NavBar,
} from "../components/index";

import useStyles from "../components/style";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />

          <Route exact path="/actor/:id" element={<Actors />} />

          <Route exact path="/" element={<Movies />} />

          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </main>
      App
    </div>
  );
};

export default App;
