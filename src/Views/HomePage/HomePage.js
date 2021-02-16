import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Container, Box, Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import { AppHeader, AppCard, AppFooter } from "../../Components/index";
import * as config from "../homepage.config";
import MainImage from "../../assets/Images/MainImage.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mt60: {
    marginTop: 60,
  },
  subHeading: {
    color: "#BABABA",
    fontSize: 20,
    maxWidth: 500,
  },
  mt: {
    marginTop: 20,
  },
  advanceSearch: {
    marginTop: 10,
    fontWeight: 500,
    cursor: "pointer",
    fontSize: 12,
  },
  searchInput: {
    width: 300,
  },
  searchButton: {
    padding: 16,
    transform: "translateX(-10px)",
    borderRadius: 10,
  },
  mvSearchButton: {
    transform: "translateX(0px)",
    marginTop: 10,
  },
  featuredPrograms: {
    fontSize: 30,
    fontWeight: "bold",
  },
  appCardWrapper: {
    flexWrap: "wrap",
  },
  categoryWrapper: {
    padding: 5,
    border: "1px solid #1d1d1d",
    borderRadius: 1000,
    marginRight: 10,
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    cursor: "pointer",
  },
  activeCategory: {
    borderColor: "#f2a154",
    color: "#fff",
    background: "rgba(242,161,84,0.9)",
  },
}));

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const filteredCardsData = config.allCardsData.filter((cardData) => {
    return selectedCategory === "All Categories" ? config.allCardsData : cardData.category === selectedCategory;
  });
  return (
    <div className={classes.root}>
      <AppHeader />
      <Container fixed className={classes.mt}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box className={`${classes.heading} ${!isMobileScreen && classes.mt60}`}>
              Your Partner in Professional Learning
            </Box>
            <Box className={classes.subHeading} mt={2}>
              Explore Executive Education Programs to match Your Learning needs
            </Box>
            <Box mt={3}>
              <TextField
                id="outlined-search"
                label="Search For Programs"
                type="search"
                variant="outlined"
                className={classes.searchInput}
              />
              <Button
                className={`${classes.searchButton} ${isMobileScreen && classes.mvSearchButton}`}
                variant="contained"
                color="secondary"
              >
                Begin Your Journey <ArrowRightAlt />
              </Button>
            </Box>
            <Box className={classes.advanceSearch}>Advance Search</Box>
          </Grid>
          <Box display={{ xs: "none", sm: "block" }}>
            <Grid item xs={6}>
              <img src={MainImage} alt={"Your Partner in Professional Learning"} />
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Container>
        <Box mt={4} className={classes.featuredPrograms}>
          Explore Programs by Category
        </Box>
        <Box mt={2}>Explore Executive Education Programs to match your learning needs</Box>
        <Box display="flex" flexWrap="wrap" my={3}>
          {config.categoriesArray.map((category) => {
            let { name, count } = category;
            return (
              <Box
                className={`${classes.categoryWrapper} ${selectedCategory === name ? classes.activeCategory : null}`}
                onClick={() => setSelectedCategory(name)}
              >{`${name}(${count})`}</Box>
            );
          })}
        </Box>
        <Box display="flex" className={classes.appCardWrapper}>
          {filteredCardsData.map((cardData) => {
            return <AppCard cardData={cardData} />;
          })}
        </Box>
      </Container>

      <AppFooter />
    </div>
  );
}
