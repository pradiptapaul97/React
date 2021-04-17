//import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Container }from '@material-ui/core';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {logout} from '../../Action/auth.action'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FaceIcon from '@material-ui/icons/Face';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AccessibleIcon from '@material-ui/icons/Accessible';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"honeydew",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  linki: {
    textDecoration: 'none',
    color: "black",
    '&:hover': {
    textDecoration: 'none',
    color: "black",
        },
    },
    link: {
      textDecoration: 'none',
      color: "white",
      '&:hover': {
      textDecoration: 'none',
      color: "white",
          },
      },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    margin: "0px auto",
    marginRight: "0px",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    margin: "0px auto",
    marginRight: "0px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isAuthenticated=sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.cartData);

  var cartItem = 0;
  if(isAuthenticated !== null)
  {
    cartItem = cart.products.length;
  }
  else
  {
    cartItem = 0;
  }
  

  const lout = () =>
  {
      dispatch(logout());
      window.location.href="/";
      // history.push('/');
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openi = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
    function iconSwitch(param) {
    switch(param) {
      case 0:
        return <ListIcon/>;
      case 1:
        return <StorefrontIcon/>;
      case 2:
        return <InfoIcon/>;
      case 3:
        return <ContactPhoneIcon/>;
      case 4:
        return <LiveHelpIcon/>;
      case 5:
        return <RoomServiceIcon/>;
      case 6:
        return <AccessibleIcon/>;
      default:
        return 'no';
    }
  }

  function linkSwitch(param) {
    switch(param) {
      case 0:
        return '/catagory';
      case 1:
        return '/products';
      case 2:
        return '/about';
      case 3:
        return '/contact';
      case 4:
        return '/faq'
      case 5:
        return '/customer-service'
      case 6:
        return '/contact'
      default:
        return 'no';
    }
  }

  function linkSwitchd(param) {
    switch(param) {
      case 0:
        return '/cart';
      case 1:
        return '/orders';
      case 2:
        return '/profile';
      case 3:
        return '/account';
      default:
        return 'no';
    }
  }

  function badgeSwitchd(param) {
    switch(param) {
      case 0:
        return cartItem;
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 0;
      default:
        return 0;
    }
  }

  function iconSwitchd(param) {
    switch(param) {
      case 0:
        return <ShoppingCartIcon/>;
      case 1:
        return <AssignmentTurnedInIcon/>;
      case 2:
        return <FaceIcon/>;
      case 3:
        return <AccountCircleIcon/>;
      default:
        return 'no';
    }
  }

  const picin = (
    <>
    <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={openi}
                    onClose={handleClose}
                >
                    {(isAuthenticated !== null) ? (<>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={lout}>Logout</MenuItem>
                         </>) : (<>
                        <MenuItem >
                            <Link className={classes.linki} to="/register">Register</Link>
                        </MenuItem>
                        <MenuItem >
                            <Link className={classes.linki} to="/login">Login</Link>
                        </MenuItem>
                        </>
                    )}
                </Menu>
                </>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        background="#232f3e"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <Link className={classes.link} to="/">Dipta</Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          
          <Button color="inherit">
          <Link to="/catagory" className={classes.link}>SHOP</Link>
          </Button>

          <Button color="inherit">
          <Link to="/about" className={classes.link}>About</Link>
          </Button>

          {/* style={{backgroundColor:"darkcyan"}} */}
          <Button color="inherit">
          <Link to="/contact" className={classes.link}>Conact</Link>
          </Button>

          <Button color="inherit">
          <Link to="/customer-service" className={classes.link}>Service</Link>
          </Button>

          <Button color="inherit">
          <Link to="/faq" className={classes.link}>Faq</Link>
          </Button>
          
            <Link to="/cart" className={classes.link}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartItem} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
            </Link>
            {picin}
          </div>
          <div className={classes.sectionMobile}>
              {picin}
          </div>


        </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
         <Link className={classes.linki} to="/login">
          <ListItem button style={{paddingLeft:0}}>
            <ListItemIcon style={{minWidth: 53,color:"#f53f85"}}><AccountCircleIcon/></ListItemIcon>
            {sessionStorage.getItem("name") ? (<ListItemText primary={sessionStorage.getItem("name")} />) : 
            (<ListItemText primary="Hello User Sign-In" />)}
          </ListItem>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Catagory','Store', 'About','Contact','Faq','Service','Help'].map((text, index) => (
          <Link className={classes.linki} to={linkSwitch(index)}>
          <ListItem button key={text}>
            <ListItemIcon style={{color:"#f53f85"}}>{iconSwitch(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        </List>
        <Divider />
        <List>
        {['Cart','Orders','Profile', 'My account'].map((text, index) => (
          <Link className={classes.linki} to={linkSwitchd(index)}>
          <ListItem button key={text}>
            <ListItemIcon  style={{color:"#f53f85"}}>
            <Badge badgeContent={badgeSwitchd(index)} color="primary">
              {iconSwitchd(index)}
              </Badge>
              </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
  );
}
