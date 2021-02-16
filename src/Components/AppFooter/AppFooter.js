import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import Logo from "../../assets/Images/Logo.png";
import { Facebook, LinkedIn, Twitter, Instagram, YouTube, WhatsApp } from "@material-ui/icons";
const useStyles = makeStyles({
  footerNavigation: {
    marginTop: 40,
  },
  programHeading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 20,
  },
  programName: {
    color: "#BABABA",
    fontSize: 14,
    marginBottom: 5,
    cursor: "pointer",
  },
  footerWrapper: {
    background: "rgb(22, 81, 108)",
    color: "#fff",
    paddingBottom: 20,
  },
  navigationBox: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
    padding: 20,
    borderBottom: 1,
    borderBottomStyle: "solid",
  },
  logo: {
    height: 40,
  },
  iconWrapper: {
    borderRadius: 20,
    padding: 6,
    border: 1,
    borderStyle: "solid",
    marginLeft: 15,
    cursor: "pointer",
  },
});
export default function AppFooter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed className={classes.footerNavigation}>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <Box className={classes.programHeading}>Trending Programs</Box>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <Box className={classes.programName}>Executive PG Diploma Programme in Management</Box>
                <Box className={classes.programName}>Digital Marketing</Box>
                <Box className={classes.programName}>Machine Learning with Business Applications</Box>
                <Box className={classes.programName}>Advanced Business Analytics Program</Box>
                <Box className={classes.programName}>Digital Mindset and Design Thinking</Box>
              </Grid>
              <Grid item sm={6}>
                <Box className={classes.programName}>Business Analytics: Identifying and Capturing Value Throug</Box>
                <Box className={classes.programName}>International Management Programme (IMP - Batch 4)</Box>
                <Box className={classes.programName}>Business Analytics: Decision-Making Using Data</Box>
                <Box className={classes.programName}>Advanced Asset Management</Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Box className={classes.programHeading}>Featured Programs</Box>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <Box className={classes.programName}>Executive PG Diploma Programme in Management</Box>
                <Box className={classes.programName}>Digital Mindset and Design Thinking</Box>
              </Grid>
              <Grid item sm={6}>
                <Box className={classes.programName}>Digital Marketing</Box>
                <Box className={classes.programName}>Marketing Analytics: Data Driven Marketing</Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Box className={classes.programHeading}>Program Categories</Box>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <Box className={classes.programName}>All Categories</Box>
                <Box className={classes.programName}>Digital Transformation</Box>
                <Box className={classes.programName}>Business Analytics</Box>
                <Box className={classes.programName}>Leadership/HRM</Box>
                <Box className={classes.programName}>Strategy</Box>
                <Box className={classes.programName}>General Management</Box>
              </Grid>
              <Grid item sm={6}>
                <Box className={classes.programName}>Innovation</Box>
                <Box className={classes.programName}>Finance & FinTech</Box>
                <Box className={classes.programName}>Operations</Box>
                <Box className={classes.programName}>Marketing</Box>
                <Box className={classes.programName}>Technology</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.footerWrapper} mt={6}>
        <Box className={classes.navigationBox}>
          <Box mr={3}>Home</Box>
          <Box mr={3}>About</Box>
          <Box mr={3}>Contact us</Box>
          <Box mr={3}>Privacy Policy</Box>
          <Box>Terms and Conditions</Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
          <img src={Logo} alt="Jigserv Digital" className={classes.logo} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Box mt={1}>Follow Us :</Box>
          <Facebook className={classes.iconWrapper} />
          <Twitter className={classes.iconWrapper} />
          <Instagram className={classes.iconWrapper} />
          <LinkedIn className={classes.iconWrapper} />
          <YouTube className={classes.iconWrapper} />
          <WhatsApp className={classes.iconWrapper} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          ©2021 Jigserv Digital Pvt. Ltd. | All Rights Reserved
        </Box>
      </Box>
    </React.Fragment>
  );
}
