import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import avatar from "assets/images/avatar.jpg"
import {Grid, Stack, Badge, Avatar, Tooltip} from "@mui/material"
import Notification from '@mui/icons-material/NotificationsNoneOutlined';
import ReportIcon from '@mui/icons-material/ChatOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import BatteryCharging80OutlinedIcon from '@mui/icons-material/BatteryCharging80Outlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from "assets/images/logo.png"
import CustomLink from './customeLink'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  background : '#E5EBEB',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow : "none",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(SwipeableDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position:"absolute",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      zIndex:999,
      
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const {children, pageTitle} = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="space-between" alignItems="center" >  
            
            <Typography variant="body1" noWrap component="div" color="gray" >
              {pageTitle}
            </Typography>
            <Stack spacing={3} direction="row" alignItems="center" >
              <Badge badgeContent={4} color="error">
                <Notification color="action" fontSize="medium" />
              </Badge>
              <Avatar  src={avatar} />
            </Stack> 
          </Grid>  
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  onClick={handleDrawerClose} >
        <DrawerHeader>
          <div style={{width:300,paddingInlineStart:60}}  >
          {
            open && (
            <img src={Logo} style={{width:80}} />
          )
          }
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>          
        </DrawerHeader>
        <List>     
          <CustomLink  to="/">     
            <ListItem button key="report">              
                <ListItemIcon>
                  <Tooltip title="گزارش تجمیعی">
                    <ReportIcon />
                  </Tooltip>
                </ListItemIcon>              
              <ListItemText primary="گزارش تجمیعی" />              
            </ListItem>
          </CustomLink>
          <CustomLink  to="/calculate-baseLine">
            <ListItem button key="khatemabna">
              <ListItemIcon>
                <Tooltip title="محاسبه خط مبنا">
                  <CalculateOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="محاسبه خط مبنا" />
              </ListItem>
          </CustomLink>
            <ListItem button key="mizanemasraf">
              <ListItemIcon>
                <Tooltip title="میزان مصرف">
                  <BatteryCharging80OutlinedIcon />
                </Tooltip>  
              </ListItemIcon>
              <ListItemText primary="میزان مصرف" />
            </ListItem>
            <ListItem button key="mohasebateMali">
              <ListItemIcon>
                <Tooltip title="محاسبات مالی">
                  <CreditScoreOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="محاسبات مالی" />
            </ListItem>
            <ListItem button key="eterazat">
              <ListItemIcon>
                <Tooltip title="اعتراضات">
                  <GavelOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="اعتراضات" />
            </ListItem>
            <ListItem button key="elanat">
              <ListItemIcon>
                <Tooltip title="اعلانات">
                  <CampaignOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="اعلانات" />
            </ListItem>
            <ListItem button key="dadehayeKham">
              <ListItemIcon>
                <Tooltip title="داده‌های‌خام">
                  <FeedOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="داده‌های‌خام" />
            </ListItem>
            <ListItem button key="setting">
              <ListItemIcon>
                <Tooltip title="تنظیمات">
                  <SettingsOutlinedIcon />
                </Tooltip>  
              </ListItemIcon>
              <ListItemText primary="تنظیمات" />
            </ListItem>
        </List>       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3,marginTop:8,background:'rgb(248,249,249,0.3)' }}>        
         {children}   
      </Box>
    </Box>
  );
}
