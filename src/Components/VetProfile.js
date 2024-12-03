import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import './vet-profile.css'; // CSS file for styling the Vet Profile

const VetProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve vet information from state or localStorage
  const user = location.state?.username || JSON.parse(localStorage.getItem("user") || "{}");
if (!user || !user.username) {
  navigate("/", { replace: true });
  //return null;
}


  return user ? (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "orange", color: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">PetChain - Vet Portal</Typography>
          <Box>
          <Button
            color="inherit"
            onClick={() => navigate("/vet-profile", { state: { username: user.username } })}
            sx={{ ml: 2 }}
            >
            My Profile
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/vet-pet-health")}
              sx={{ ml: 2 }}
            >
              Pet Health
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/vet-insights")}
              sx={{ ml: 2 }}
            >
              Insights
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/", { replace: true });
              }}
              sx={{ ml: 2 }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="vet-profile-section-container">
        <div className="vet-profile-section-text-container">
          <Typography variant="h5" className="greeting-message">
            {/* Hi {vet.vetname}, welcome to your PetChain Dashboard! Thank you for partnering with us. */}
            Hi Vet!!!
          </Typography>

          <h1 className="vet-profile-primary-heading">Manage Your Veterinary Services</h1>
          <p className="vet-primary-text">
            Access pet health records, provide care recommendations, and explore insights for better pet healthcare.
          </p>

          {/* Navigation Buttons */}
        </div>
      </div>
    </div>
  ) : null;
};

export default VetProfile;
