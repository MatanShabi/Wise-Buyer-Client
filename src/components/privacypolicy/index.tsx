import { Container, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    maxWidth: "80%",
    minHeight: "70vh",
    margin: "auto",
  },
}));

const PrivacyPolicyPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className="my-8">
      <div
        style={{
          border: "2px solid #ccc",
          padding: "50px",
          width: "80%",
          margin: "auto",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Privacy Policy
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ paddingTop: "20px" }}
        >
          1. Introduction
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.2rem" }}
        >
          Our app respects your privacy and is committed to protecting your
          personal data. This privacy policy will inform you as to how we look
          after your personal data when you visit our app (regardless of where
          you visit it from) and tell you about your privacy rights and how
          the law protects you.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ paddingTop: "20px" }}
        >
          2. The data we collect about you
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.2rem" }}
        >
          Personal data, or personal information, means any information about
          an individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data).
          <br></br>We may collect, use, store and transfer different kinds of
          personal data about you which we have grouped together as follows:
          <br></br>
          <br />
          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              Identity Data includes [first name, last name or similar
              identifier].
            </li>
            <li>Contact Data includes [email address].</li>
            <li>Financial Data includes [prices of your purchased items].</li>
            <li>
              Transaction Data includes [details about payments to and from
              you and other details of products and services you have
              purchased from us].
            </li>
            <li>
              Technical Data includes [internet protocol (IP) address, your
              login data, browser type and version, time zone setting and
              location, browser plug-in types and versions, operating system
              and platform, and other technology on the devices you use to
              access this app].
            </li>
            <li>
              Profile Data includes [your username and password, purchases or
              orders made by you, your interests, preferences, feedback and
              survey responses].
            </li>
            <li>
              Usage Data includes [information about how you use our app,
              products and services].
            </li>
            <li>
              Marketing and Communications Data includes [your preferences in
              receiving marketing from us and our third parties and your
              communication preferences].
            </li>
          </ul>
        </Typography>

        {/* Add more sections as needed */}
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
