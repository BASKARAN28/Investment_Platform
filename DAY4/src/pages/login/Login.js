import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import KeyIcon from '@mui/icons-material/Key';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && isStrongPassword(password)) {
      console.log('Login successful!');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='Body'>
      <Paper
        style={{
          minHeight: '50vh',
          display: 'flex',
          padding: '50px 20px',
          width: 600,
          margin: '20px auto',
        }}
      >
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>

          <div>
            <h3 style={{ textAlign: 'left', color: 'black' }}>
              <PermIdentityIcon /> UserName:
            </h3>
            <Paper
              elevation={6}
              style={{
                width: '550px',
                margin: '10px',
                padding: '15px',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                required
                id='outlined-basic1'
                label='Enter Email'
                variant='outlined'
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Paper>
          </div>

          <div>
            <h3 style={{ textAlign: 'left', color: 'black' }}>
              <KeyIcon /> Password:
            </h3>
            <Paper
              elevation={6}
              style={{
                width: '550px',
                margin: '10px',
                padding: '15px',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                required
                variant='outlined'
                fullWidth
                type='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordStrength(
                    isStrongPassword(e.target.value) ? 'Strong' : 'Weak'
                  );
                }}
                error={password === ''}
                helperText={
                  password === ''
                    ? 'This field is required'
                    : passwordStrength
                }
              />
            </Paper>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <Link to='/Home'>
            <button type='submit'>Login</button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};


