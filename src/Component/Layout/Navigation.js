import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Container }from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../../Action/auth.action'
import Drawer from './Drawer'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  appBar: {
    zIndex: theme.zIndex.drawer + 200,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      history.push('/');
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
                    open={open}
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
    <>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
          <Container>
            <Toolbar>
            <Drawer className={classes.menuButton}/>
            <Typography variant="h6" className={classes.title}>
                <Link className={classes.link} to="/">Dipta</Link>
            </Typography>
    
                <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
    </div>
    </>
  );
}


