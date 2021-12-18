import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./WebPage";
import Album from "./WebPage";
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

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Test text into the card
            </Typography>
            <Typography variant="h5" component="div">
              Another text into the card
            </Typography>

            <Album />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
