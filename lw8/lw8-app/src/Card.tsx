import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Components, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setConstantValue } from "typescript";

const theme = createTheme();

interface GithubRepo {
  id: number;
  name: string;
  description: string;
}
var ArrayData: GithubRepo[];
var isLoaded: boolean = false;

export default function Album() {
  var [Repos, setArrayData] = useState(ArrayData);

  useEffect(() => {
    fetch(`https://api.github.com/users/vladdy-moses/repos`)
      .then((res) => res.json())
      .then((res: GithubRepo[]) => {
        setArrayData((Repos = res));
      });
    isLoaded = true;
  }, []);

  if (isLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <div>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                  {Repos.map((item) => (
                    <Grid xs={12} sm={6} md={4} item key={item.id}>
                      <Card
                        sx={{
                          marginTop: 5,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h1">
                            {item.name}
                          </Typography>
                          <Typography>{item.description}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </div>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "#303030", p: 6 }} component="footer">
          <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
          >
            Что-то в footer :)
          </Typography>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  } else {
    return (
      <Box sx={{ bgcolor: "#303030", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          Какая-то ошибка :с
        </Typography>
      </Box>
    );
  }
}
