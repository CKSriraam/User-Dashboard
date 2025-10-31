import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Avatar,
  IconButton
} from "@mui/material";
import { 
  Email, 
  Phone, 
  Language, 
  LocationOn 
} from "@mui/icons-material";

const UserCard = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        className="neon-card"
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          width: "100%",
          height: "auto",
          minHeight: "200px",
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
        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
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
              mb: 1,
              userSelect: "none"
            }}
          >
            {user.name}
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: "#f50057",
              mb: 2,
              fontWeight: 500
            }}
          >
            @{user.username}
          </Typography>
          <Button 
            variant="outlined"
            onClick={handleOpen}
            sx={{
              width: "100%",
              borderColor: "#00e5ff",
              color: "#00e5ff",
              "&:hover": {
                borderColor: "#00e5ff",
                backgroundColor: "rgba(0, 229, 255, 0.1)",
                boxShadow: "0 0 10px #00e5ff"
              }
            }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(22, 27, 34, 0.95)",
            border: "2px solid #00e5ff",
            boxShadow: "0 0 20px #00e5ff",
            borderRadius: "15px",
            minWidth: "300px"
          }
        }}
      >
        <DialogTitle 
          sx={{ 
            fontWeight: "bold",
            color: "#00e5ff",
            textAlign: "center",
            borderBottom: "1px solid #00e5ff"
          }}
        >
          {user.name}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2, color: "#f50057" }}>
            @{user.username}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Email fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
            {user.email}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
            {user.phone}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOn fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
            {user.address?.city}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Language fontSize="small" sx={{ mr: 1, color: "#00e5ff" }} />
            {user.website}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <IconButton size="small" sx={{ mr: 1, color: "#00e5ff" }}>🏢</IconButton>
            {user.company?.name}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserCard;
