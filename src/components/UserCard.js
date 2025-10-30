import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }) => (
  <Card
    sx={{
      boxShadow: 4,
      borderRadius: 2,
      height: "230px", // fixed height
      width: "100%", // responsive width inside column
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      textAlign: "left",
      p: 2,
    }}
  >
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {user.name}
      </Typography>
      <Typography variant="body2">📧 {user.email}</Typography>
      <Typography variant="body2">📞 {user.phone}</Typography>
      <Typography variant="body2">🏙 {user.address?.city}</Typography>
    </CardContent>
  </Card>
);

export default UserCard;