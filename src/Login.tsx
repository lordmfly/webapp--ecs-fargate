import React, {
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'

// TODO #1: replace this link with your deployment lambda web app login
const LOGIN_URL = 'http://localhost:5001/login'


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [checkInput, setCheckInput] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setShowError(false)

    if (!username || !password) {
      setCheckInput(true)
    } else {

      // TODO #2: disable below 4 line codes, and enable below fetch method to call your login URL
      if (username === 'demo' && password === 'demo') {
        navigate('/table')
      } else {
        setShowError(true)
      }

      // fetch(LOGIN_URL, {
      //   method: 'POST',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   credentials: 'same-origin',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   redirect: 'follow',
      //   referrerPolicy: 'no-referrer',
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.accessToken) {
      //     navigate('/table')
      //   } else {
      //     setShowError(true)
      //   }
      // })
      // .catch(() => setShowError(true))

    }
  }

  return (
    <div style={{
      overflow: 'hidden',
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <Chip
          variant="outlined"
          color="success"
          label="Use demo/demo credentials"
          style={{marginBottom: 10}}
        />
        <TextField
          error={checkInput && !username}
          helperText={checkInput && !username ? 'Username cannot be empty' : ''}
          id="username-inout"
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          error={checkInput && !username}
          helperText={checkInput && !username ? 'Password cannot be empty' : ''}
          id="password-input"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {
          showError &&
          <Chip
            variant="outlined"
            color="error"
            label="Wrong credentials"
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          />
        }
        <Button
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </div>
  )
}
