import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your account settings here.</p>
      {/* Example settings options */}
      <div>
        <label>
          <input type="checkbox" /> Receive email notifications
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> Enable dark mode
        </label>
      </div>
    </div>
  );
};

export default Settings;
