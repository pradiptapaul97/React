import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlagIcon from '@material-ui/icons/Flag';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';


import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        // fontFamily: "cursive !important",
      },
      cardGrida: {
        paddingBottom: theme.spacing(8),
        // fontFamily: "cursive !important",
      },
      paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
    
            backgroundColor:"#f53f85",
            color:"white",
      },
      root1: {
        flexGrow: 1,
      },

      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },

      accordion:{
        margin: "15px 0px",
      }
  }));

export default function Body()
{
    
    const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return(
        <>
        <Container className={classes.cardGrid}>
            <div className={classes.root1}>
                <Grid container spacing={4} style={{justifyContent: "center"}}>
                    <Grid item  xs={6} sm={4} md={2}>
                        <Paper  className={classes.paper} elevation={10}><FlagIcon/><p>Getting Started</p></Paper>
                    </Grid>
                    <Grid item  xs={6} sm={4} md={2} >
                        <Paper className={classes.paper} elevation={10}><MonetizationOnIcon/><p>Pricing & Plans</p></Paper>
                    </Grid>
                    <Grid item  xs={6} sm={4} md={2}>
                        <Paper className={classes.paper} elevation={10}><LocalMallIcon/><p>Sales Question</p></Paper>
                    </Grid>
                    <Grid item  xs={6} sm={4} md={2}>
                        <Paper className={classes.paper} elevation={10}><ImportContactsIcon/><p>Usage Guides</p></Paper>
                    </Grid>
                    <Grid item  xs={6} sm={4} md={2}>
                        <Paper className={classes.paper} elevation={10}><InfoIcon/><p>General Guide</p></Paper>
                    </Grid>
                </Grid>
        </div>

        </Container>

        <Container className={classes.cardGrida}>
        <div className={classes.root}>
      <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <h6 style={{fontWeight: "bold"}}>What shipping methods are available?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h6 style={{fontWeight: "bold"}}>What are shipping times and costs?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h6 style={{fontWeight: "bold"}}>What payment methods can I use?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <h6 style={{fontWeight: "bold"}}>What payment methods can I use?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <h6 style={{fontWeight: "bold"}}>Can I use my own domain name?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <h6 style={{fontWeight: "bold"}}>What kind of customer service do you offer?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </Container>
        </>
    )
}