import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { sortStory } from '../utility/utils';
import { elapsedTime } from '../utility/elapsedTime';
import { useNavigate } from 'react-router-dom';

const maxLength = 200

export const CardPost = ({id, description, photoUrl, title, timestamp}) => {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={photoUrl}
          alt={title}
        />
        <CardContent>
          <Typography style={{fontWeight:"bold"}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className='time' style={{fontFamily: "'Courier New', Courier, monospace"}}>
            {elapsedTime(timestamp)}
          </Typography>
          <Typography className='cardtext' sx={{marginTop:"10px"}} variant="body2" color="text.secondary">
            {sortStory(description, maxLength)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick = {()=>navigate("details/"+id)} size="small" color="primary">
          Részletek...
        </Button>
      </CardActions>
    </Card>
  );
}