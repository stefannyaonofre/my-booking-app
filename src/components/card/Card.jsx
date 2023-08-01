import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';

export default function ActionAreaCard({prop}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prop.image}
          alt={prop.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prop.name}
          </Typography>
          <Rating name="read-only" value={prop.rating} readOnly />
          <Typography variant="body2" color="text.secondary">
            <span>{prop.priceByNight}</span>
            <span>{prop.idCategory}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}