import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Images/Logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles({
  title: {
    height: 40,
  },
  emptyDiv: {
    flexGrow: 1,
  },
});
export default function AppHeader() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSideDrawer(!sideDrawer);
  };
  const list = (anchor) => (
    <div role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
      <List>
        {["Categories", "Universities", "Course Recommendation", "For Organization", "Discussion Forum", "Blog"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          {isMobileScreen ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <Drawer anchor={"left"} open={sideDrawer} onClose={() => toggleDrawer(false)}>
                {list("left")}
              </Drawer>
              <MenuIcon />
            </IconButton>
          ) : null}
          <img src={Logo} alt="Jigserv Digital" className={classes.title} />
          <Box className={classes.emptyDiv}></Box>
          {!isMobileScreen ? (
            <Box>
              <Button color="inherit">Categories</Button>
              <Button color="inherit">Universities</Button>
              <Button color="inherit">Course Recommendation</Button>
              <Button color="inherit">For Organization</Button>
              <Button color="inherit">Discussion Forum</Button>
              <Button color="inherit">Blog</Button>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
