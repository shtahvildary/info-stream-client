import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
// import MainAppBar from './AppBar'
// import { ListItem, ListItemText } from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import PlayerPage from '../PlayerPage'


import Dashboard from '@material-ui/icons/Dashboard';
import Computer from '@material-ui/icons/Computer'


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import Register from '../Register';
// import computerIcon from '../Icons/twotone-computer-24px'


const drawerWidth = 240;

const styles = theme => ({
  ///////////
  direction:"rtl",
  ///////////

  root: {
    flexGrow: 1,
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      // color:theme.color
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    //my color
    // backgroundColor: "#e6f9ff",
    ////
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      managementOpen:false,
      elements: [],
      src:''
    };
  }
  handleClickManagement = () => {
    this.setState(state => ({ managementOpen: !state.managementOpen }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  componentWillMount(event) {

    this.setState({ elements: this.props.elements }, () => {

    })
  }
  selectedSrc(src){
    console.log('src: ',src)
if(src!=this.state.src)
    this.setState({src:src},()=>{
    console.log('this.state.src: ',this.state.src)
    this.props.selectedSrc=src

    })
//     var localComponents=[]
    
// localComponents.push(
//   <PlayerPage src/>

// )
// this.setState({ localComponent: localComponent },()=>{})
  
  }

  render() {
    const { classes, theme } = this.props;
// console.log('theme: ',theme)
    return (
      <div className={classes.root}>
      {/* <div className={classes.root}> */}
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          
          

          
          <ListItem>
          
          <Button onClick={this.selectedSrc('http://172.16.17.159:8000/out.m3u8')}>شبکه یک</Button>
          {/* <Button onClick={this.selectedSrc('http://172.16.17.159:8000/out2.m3u8')}>شبکه یک</Button> */}
          {/* <Button onClick={this.selectedSrc('http://192.168.0.116:8000/out2.m3u8')}>شبکه یک</Button> */}
          </ListItem>
         

          <ListItem>
          <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText>شبکه دو</ListItemText>
          </ListItem>
         
         </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
{/*           
// {if this.state.elements.length!==0{return(elements.map(e=>{
//   render(){e}
// }))}} */}
<div className="App">
        
         
         
          </div>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles( styles,{ withTheme: true })(MiniDrawer);
