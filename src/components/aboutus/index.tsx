import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: "auto",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  card: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    maxWidth: "80%",
    minHeight: "70vh",
    margin: "auto",
  },
}));

const teamMembers = [
  {
    name: "Raz Hagay Gavriel",
    imageUrl: "http://localhost:3000/public/TeamMembers/raz.jpeg",
    phoneNumber: "(+972)50-960-5540",
  },
  {
    name: "Matan Shabi",
    imageUrl: "http://localhost:3000/public/TeamMembers/matan.jpeg",
    phoneNumber: "(+972)54-831-5013",
  },
];

const AboutUsPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            About Us
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            style={{ fontSize: "1.3rem" }}
          >
            This is a social media app that allows users to share and compare
            the products they buy. Users can post about their latest purchases,
            comment on others' posts, and engage in discussions about products.
            <br />
            <br />
            This app was created by a team of developers who wanted to create a
            platform where people can share their shopping experiences and
            discover new products. We hope you enjoy using our app and we are
            always looking for ways to improve it.
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            style={{ paddingBottom: "20px", paddingTop: "20px" }}
          >
            Team Members
          </Typography>

          <Grid container spacing={2}>
            {teamMembers.map((member, index) => (
              <Grid item xs={8} sm={6} key={index}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar} src={member.imageUrl}>
                    {member.name[0]}
                  </Avatar>
                  <Typography variant="h4" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {member.phoneNumber}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutUsPage;
