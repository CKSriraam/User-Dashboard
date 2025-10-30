import React from "react";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";

const Navbar = ({ search, setSearch }) => {
  return (
    <AppBar position="static" color="primary" sx={{ background: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          User Dashboard
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            background: "#fff",
            borderRadius: "5px",
            width: "250px",
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
