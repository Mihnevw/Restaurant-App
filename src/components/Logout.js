import { useNavigate } from 'react-router-dom';

import * as AuthService from '../services/AuthService.js';
import { AuthContext } from '../context/AuthContext.js';
import { useContext, useState } from 'react';

function LogoutForm() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      AuthService.logout(user)
        .then(() => {
          logout()

          navigate('/');
        })
        .catch(err => {
          alert(err.message);
        })
        .finally(() => {
          setLoading(false)
        })
    }, 1000)
  };

  return (
    <form onSubmit={handleLogout} style={formStyle} method="POST">
      <h2>Logout</h2>
      {loading ? (
        <div style={loaderStyle}>Loading...</div>
      ) : (
        <button type="submit" style={buttonStyle}>Logout</button>
      )}
    </form>
  );
}

// Примерен CSS стил
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#FEA116',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const loaderStyle = {
  padding: '10px',
  color: '#FEA116',
  textAlign: 'center',
};

export default LogoutForm;
