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

function UserCardItem({ user }) {
  return (
    <Card
      className="neon-card"
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
        border: "2px solid #00e5ff",
        boxShadow: "0 0 20px #00e5ff",
        background: "rgba(22, 27, 34, 0.9)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 0 30px #00e5ff",
        },
      }}
    >
      <Avatar
        alt={user.name}
        src={`https://robohash.org/${user.id}?set=set5`}
        sx={{
          width: 90,
          height: 90,
          mb: 2,
          border: "3px solid #00e5ff",
          boxShadow: "0 0 15px #00e5ff",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#00e5ff",
          mt: 1,
          userSelect: "none",
        }}
      >
        {user.name}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: "#f50057", mb: 2, fontWeight: 500 }}
      >
        @{user.username}
      </Typography>
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", mb: 1 }}
        >
          <Email fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
          {user.email}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", mb: 1 }}
        >
          <Phone fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
          {user.phone}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", mb: 1 }}
        >
          <Language fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
          {user.website}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <LocationOn fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
          {user.address.city}
        </Typography>
      </CardContent>
    </Card>
  );
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
            variant="h6"
            sx={{
              fontWeight: 900,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(90deg, #00e5ff, #7c4dff, #ff4081)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "Montserrat, sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            User Dashboard
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
            label="Search users..."
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
