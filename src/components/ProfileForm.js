import React from 'react';

const ProfileForm = ({ name, email, phone, bio, password, handleSubmit, setName, setEmail, setPhone, setBio, setPassword }) => {
  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2>Profile Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyles}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          value={bio}
          placeholder="Tell us about yourself"
          onChange={(e) => setBio(e.target.value)}
          style={textareaStyles}
        />
      </label>
      <button type="submit" style={buttonStyles}>Save</button>
    </form>
  );
};

const formStyles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "orange",
  };
  
  const inputStyles = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "4px",
    border: "#322f2f",
  };
  
  const textareaStyles = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "80px",
  };
  
  const buttonStyles = {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    background: "#322f2f",
    color: "orange",
    cursor: "pointer",
  };

export default ProfileForm;
