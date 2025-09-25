import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LizardCard() {
  return (
    <div className='px-20 py-10 flex flex-wrap justify-center gap-6'>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="5.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rose
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The rose (genus Rosa) is a perennial flowering shrub in the family Rosaceae, native primarily to the Northern Hemisphere.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="7.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sunflower
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A sunflower's large head is not a single flower, but an inflorescence, or pseudanthium, composed of many small, individual flowers called florets.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="8.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lotus
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A key symbol in Hinduism and Buddhism, the lotus emerges pristine and beautiful from murky, muddy water, representing the purity of mind and spirit despite life's.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="6.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lavender
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Despite its name, this species is native to the Mediterranean region. It is the most commonly cultivated type for its sweet fragrance, culinary uses, high-quality oil.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="7.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sunflower
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A sunflower's large head is not a single flower, but an inflorescence, or pseudanthium, composed of many small, individual flowers called florets.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="8.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lotus
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A key symbol in Hinduism and Buddhism, the lotus emerges pristine and beautiful from murky, muddy water, representing the purity of mind and spirit despite life's.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="6.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lavender
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Despite its name, this species is native to the Mediterranean region. It is the most commonly cultivated type for its sweet fragrance, culinary uses, high-quality oil.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="5.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rose
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The rose (genus Rosa) is a perennial flowering shrub in the family Rosaceae, native primarily to the Northern Hemisphere.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
