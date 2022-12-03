import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "../../styles/Card.module.css";

type CharacterProp = {
  image: string;
  name: string
}


const ActionAreaCard: React.FC<CharacterProp> = ({image, name})=> {
  return (
    <div className={styles.container}>
    <Card className={styles.item} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'Descripcion del personaje'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ActionAreaCard;