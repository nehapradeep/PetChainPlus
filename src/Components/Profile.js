import React, { useEffect } from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AddPetIcon from "../Assets/image.png"; // Icon for adding a pet
import './add-pet.css'; // CSS file for styling

const AddPetPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve user information from state or localStorage
  const user = location.state?.username || JSON.parse(localStorage.getItem("user"));
if (!user || !user.username) {
  navigate("/", { replace: true });
}

  // useEffect(() => {
  //   // If the user is not authenticated, redirect to the login page
  //   if (!user) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, navigate]);

  return user ? (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "orange", color: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">PetChain</Typography>
          <Box>
            <Button
              color="inherit"
              onClick={() => navigate("/profile")}
              sx={{ ml: 2 }}
            >
              My Profile
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/insurance")}
              sx={{ ml: 2 }}
            >
              Insurance
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/pet-health")}
              sx={{ ml: 2 }}
            >
              Pet Health
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/owner-transfer")}
              sx={{ ml: 2 }}
            >
              Ownership Transfer
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
      <div className="add-pet-section-container">
        <div className="add-pet-section-text-container">
          <Typography variant="h5" className="greeting-message">
            Hi {user.username}, welcome to PetChain! Thank you for choosing us.
          </Typography>

          <h1 className="add-pet-primary-heading">Add Your Beloved Pet</h1>
          <p className="primary-text">
            Let's create a safe and secure profile for your pet! Add their
            details today to get started on your journey with PetChain.
          </p>

          {/* Add Pet Icon Section */}
          <div className="add-pet-icon-container">
            <img 
              src={AddPetIcon} 
              alt="Add Pet Icon" 
              className="add-pet-icon" 
              onClick={() => navigate('/pet-registration')}
            />
            <p className="add-pet-text">Click to Add Pet</p>
          </div>

          {/* Navigation Buttons */}
          <div className="add-pet-buttons-container">
            <button 
              className="pprimary-button"               
              onClick={() => navigate('/pet-registration')}
            >
              Add Pet
            </button>
            <button
              className="pprimary-button"
              onClick={() => navigate('/profile')}
            >
              Manage Pets
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Return null to prevent rendering if not authenticated
};

export default AddPetPage;