import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Switch,
  Avatar,
  InputAdornment,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Email,
  Phone,
  Language,
  LocationOn,
  Search as SearchIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserCard from './components/UserCard';

function UserCardItem({ user }) {
  return <UserCard user={user} />;
}

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: { default: "#0d1117", paper: "#161b22" },
      primary: { main: "#00e5ff" },
      secondary: { main: "#f50057" },
      text: { primary: "#e6edf3", secondary: "#8b949e" },
    },
    typography: { fontFamily: "Montserrat, sans-serif" },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: { default: "#f4f6f8" },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          boxShadow: "0 0 20px #00e5ff",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#f82d09ff",
              fontFamily: "Montserrat, sans-serif",
              textShadow: "10 10 120px #86007bff",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
          >
            USER DASHBOARD
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </div>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <div className="d-flex justify-content-center mb-4">
          <TextField
            label  ="Search users..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#00fff7" }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "25px",
                boxShadow: "0 0 15px #00e5ff",
                "& fieldset": {
                  borderColor: "#00e5ff !important",
                },
              },
            }}
            sx={{
              width: "50%",
              minWidth: "280px",
              input: { color: "#00e5ff" },
            }}
          />
        </div>

        {/* User Cards */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            {filteredUsers.map((user) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                key={user.id}
              >
                <UserCardItem user={user} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
