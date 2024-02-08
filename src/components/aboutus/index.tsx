import { Container, Typography, Grid, Avatar } from "@material-ui/core";


const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Raz Hagay Gavriel",
      imageUrl: `${import.meta.env.VITE_BACKEND_URL}/public/TeamMembers/raz.jpeg`,
      phoneNumber: "(+972)50-960-5540",
    },
    {
      name: "Matan Shabi",
      imageUrl: `${import.meta.env.VITE_BACKEND_URL}/public/TeamMembers/matan.jpeg`,
      phoneNumber: "(+972)54-831-5013",
    },
  ];

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
          About Us
        </Typography>

        <Typography variant="body1" gutterBottom style={{ fontSize: "1.3rem" }}>
          This is a social media app that allows users to share and compare the
          products they buy. Users can post about their latest purchases,
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

        <Grid container spacing={2} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={8}
              sm={5}
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                margin: "10px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Avatar
                  src={member.imageUrl}
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "auto",
                  }}
                >
                  {member.name[0]}
                </Avatar>
                <Typography variant="h4" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {member.phoneNumber}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default AboutUsPage;
