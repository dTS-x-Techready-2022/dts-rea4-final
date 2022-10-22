import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const CardHotTopic = ({ image, link, title, time }) => {
    const navigate = useNavigate();
  
    const openDetail = () => {
      navigate(link);
    };
return (
    <Grid container spacing={2}>
    <Grid item xs={6} md={8}>
    <img class="image" src={image} alt />
    </Grid>
    <Grid item xs={6} md={4}>
      xs=6 md=4
    </Grid>
    <Grid item xs={6} md={4}>
      <div>xs=6 md=4</div>
    </Grid>
    <Grid item xs={6} md={8}>
      <div>xs=6 md=8</div>
    </Grid>
  </Grid>
  );
};
  export default CardHotTopic;