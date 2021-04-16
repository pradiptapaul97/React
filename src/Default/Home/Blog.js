import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  link:{
        color:"black",
        textDecoration:"none",
        "&:hover":{
            color: "#f53f85",
            textDecoration:"none",
    }
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Recent Post
            </Typography>
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
            From The DIPTA Blog
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{color: "#f53f85"}}>
                      Heading
                    </Typography>
                    <Link className={classes.link}>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                    </Link>
                    <Typography style={{paddingTop:10}}>
                    <Link className={classes.link} style={{borderBottom: "1px solid #f53f85"}}>Read Story</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}