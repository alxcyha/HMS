import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { ButtonBase } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
    const navigate = useNavigate()
  return (
    <div sx={{ flexDirection: 'column', height: 'maxHeight' }}>
        <ButtonBase onClick={() => navigate('/homeDR')}>
            <Box sx={{ flexGrow: 1, height:'75%', alignContent: 'stretch' }}>
                <Item sx={{ height: '60px',width: '100px' }}>
                    PATIENTS
                </Item>
            </Box>
        </ButtonBase>
   
        <ButtonBase onClick={() => navigate('/')}>
            <Box sx={{ flexGrow: 1}}>
            <Grid  container spacing={2}>
                <Grid item xs={1} md={15}>
                    <Item>Log out</Item>
                </Grid>
            </Grid>
            </Box>
        </ButtonBase>
    </div>
  );
}
