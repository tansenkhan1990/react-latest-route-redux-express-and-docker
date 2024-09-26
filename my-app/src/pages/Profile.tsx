import React from "react";

const Profile: React.FC = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Here is your profile information:</p>
      {/* Example profile data, replace with actual user data */}
      <p>
        <strong>Username:</strong> johndoe
      </p>
      <p>
        <strong>Email:</strong> johndoe@example.com
      </p>
    </div>
  );
};

export default Profile;
