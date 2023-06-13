import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Copyright from '../ui/Copyright';
import { useNavigate } from 'react-router';
import doPost from '../../helpers/fetch_helper.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function SignIn() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("choose user type");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const data = {
        username,
        password,
        user
      }

      let result = await doPost("http://localhost/backend/login.php", data);
      
      if (result.data.status) {
        navigate('/home');
      } else {
        alert(result.data.message);
      }

    } catch (e) {
      alert(e.toString());
    } finally {
      setIsLoading(false);
    }

  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', p: 4 }}>
          <LockOutlinedIcon fontSize='large' />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{
          mt: 2,
          "&:hover": {
            color: 'red'
          }
        }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">I am a</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="User"
              onChange={(ev) => setUser(ev.target.value)}
            >
              <MenuItem value={'DR'}>Doctor</MenuItem>
              <MenuItem value={'PT'}>Patient</MenuItem>
              <MenuItem value={'A'}>Admin</MenuItem>
            </Select>
         </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={show ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShow(!show)}
                  edge="end"
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container >
  );
}