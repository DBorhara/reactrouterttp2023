import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();
  
  const navigateToSettings = () => {
    console.log("NAVIGATED");
    // Navigate to the settings page
    return navigate("/userProfile/settings");
  };

  return (
    <div>
      <h2>Profile Details</h2>

      <button onClick={navigateToSettings}>Go to Settings</button>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileDetails;
