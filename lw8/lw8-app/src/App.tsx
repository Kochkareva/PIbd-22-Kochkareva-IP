import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Album from "./Card";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ bgcolor: "#303030" }}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Репозиторрии пользователя vladdy_moses
            </Typography>
          </Toolbar>
        </AppBar>
        <Album />
    </Box>
  );
}

export default App;
