import React from "react";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  Grid,
  Button,
  CardContent,
  Card,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CastForEducation, AttachMoney } from "@material-ui/icons";
import CardImage from "../../assets/Images/CardImage.svg";
import IIMRohtak from "../../assets/Images/IIMRohtak.svg";
import { rupeeCommaFormatter } from "../../utils/utility";
const useStyles = makeStyles({
  cardWrapper: {
    width: "30%",
    minWidth: 380,
    marginTop: 40,
    marginRight: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  certifiedText: {
    bottom: 0,
    background: "#fff",
    padding: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  mt2: {
    marginTop: 8,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubHeading: {
    fontSize: 12,
    color: "#BCBCBC",
  },
  featureBox: {
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    width: "25%",
  },
  firstBox: {
    background: "#EAF0FD",
  },
  secondBox: {
    background: "#FFFAEB",
  },
  thirdBox: {
    background: "#F5EFFD",
  },
  bigFont: {
    fontSize: 36,
    fontWeight: "bold",
  },
  universityName: {
    fontSize: 12,
    color: "#E5185D",
    textAlign: "center",
  },
  mediumFont: {
    fontSize: 16,
  },
  smallFont: {
    fontSize: 10,
    color: "#E5185D",
  },
});

export default function AppCard({ cardData }) {
  const classes = useStyles();
  let { programName, isCertified, duration, university, courseType, cost, lastDate } = cardData;
  return (
    <Card className={classes.cardWrapper}>
      <CardContent>
        <Box position={"relative"}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={CardImage}
            title="Contemplative Reptile"
          />
          {isCertified && (
            <Box position="absolute" className={classes.certifiedText}>
              CERTIFIED COURSE
            </Box>
          )}
        </Box>
        <Grid container spacing={3} className={classes.mt2}>
          <Grid item xs={9}>
            <Box className={classes.cardHeading}>{programName}</Box>
            <Box mt={1} className={classes.cardSubHeading}>
              {duration}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <img src={IIMRohtak} alt="IIM Rohtak" />
            <Box className={classes.universityName}>{university}</Box>
          </Grid>
        </Grid>
        <Box display="flex" p={1} bgcolor="background.paper" justifyContent="space-between" mt={2}>
          <Box className={`${classes.featureBox} ${classes.firstBox}`}>
            <CastForEducation fontSize={"large"} />
            <Box className={classes.mediumFont}>{courseType}</Box>
            <Box className={classes.smallFont} mt={1}>
              Delivery
            </Box>
          </Box>
          <Box className={`${classes.featureBox} ${classes.secondBox}`}>
            <AttachMoney fontSize={"large"} />
            <Box className={classes.mediumFont}>{rupeeCommaFormatter(cost)}</Box>
            <Box className={classes.smallFont} mt={1}>
              Course Fee
            </Box>
          </Box>
          <Box className={`${classes.featureBox} ${classes.thirdBox}`}>
            <Box fontSize={"smaller"} fontWeight={"bold"}>
              {lastDate.month}
            </Box>
            <Box className={classes.bigFont}>{lastDate.date}</Box>
            <Box className={classes.smallFont}>Last Date</Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="gilad" />} label="Add to compare" />
          </FormGroup>
          <Button variant="contained" color="secondary">
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
