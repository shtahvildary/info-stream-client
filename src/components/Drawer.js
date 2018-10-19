import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

// import classNames from "classnames";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import Collapse from "@material-ui/core/Collapse";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    // direction:'rtl',
    // anchor:'right',
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    
    // overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    position: 'absolute',
    // marginRight: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: '100%' ,
      // width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarText:{
    position:'center' ,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
   
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    elements: [],
      src: "",
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentWillMount(event) {
    if (!this.props.items) return;
    // var items = [];
    // this.props.items.map((i, index) => {
    //   console.log("i: ",i)
    //   items.push(
    //     <ListItem
    //       key={i.id}
    //       button
    //       onClick={event => this.selectedSrc(event, i)}
    //     >
    //       <ListItemText inset primary={i.name} />
    //     </ListItem>
    //   );
    //   return items;
  // });
    this.setItems(this.props.items)

    this.setState({ elements: this.props.elements }, () => {});
    // this.setState({ elements: this.props.elements, items: items }, () => {});
  }
setItems(inputs){
  var items = [];
  inputs.map((i, index) => {
    console.log("i: ",i)
    items.push(
      <ListItem
        key={i.id}
        button
        onClick={event => this.selectedSrc(event, i)}
      >
        <ListItemText inset primary={i.name} />
      </ListItem>
    );
    return items;
    
  })
  this.setState({  items: items }, () => {});
}
  selectedSrc(event, i) {
    this.setState({ selectedSrc: i.address, selectedName: i.name }, () => {
      this.props.selectedSrc(i);
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.state.items !== newProps.items) 

    this.setItems(newProps.items)
    if (this.state.elements !== newProps.elements) {
      this.setState({ elements: newProps.elements }, () => {
      });
    }
  }

  render() {
    const { classes, theme } = this.props;


    return (
      <div className={classes.root} >
        <AppBar className={classes.appBar} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="انتخاب شبکه"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit"  className={this.state.flex}>
              {this.props.selectedName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {this.state.items}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {this.state.items}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{this.state.elements}</Typography>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);