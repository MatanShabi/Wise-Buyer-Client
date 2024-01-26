import { FC } from "react";
import useUser from "../../hooks/useUser";
import { Avatar, Button, Card, CardContent, Container, Paper, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link } from "react-router-dom";

interface PostProps { }

const Post: FC<PostProps> = (props) => {
  
  const { user } = useUser();
  const { handleSubmit, reset, formState, control } = useForm();

  const handleFormSubmit = (data: any) => {
    reset();
  };

  return (
    <Container maxWidth="lg" className="my-8">
      <Paper className="p-8">
        <form
          className="flex flex-col gap-1 mb-12"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex items-center gap-1">
            <Controller
              name="title"
              control={control}
              defaultValue=""
              rules={{
                required: 'Title name is required'
              }}
              render={({ field }) => (
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!formState.errors.title}
                  {...field} />
              )}
            />
            <Button
              variant="contained"
              component="label"
              htmlFor="picture"
              color="secondary"
              startIcon={<AddPhotoAlternateIcon />}
            >
              Add Picture
              <input
                id="picture"
                name="picture"
                type="file"
                style={{ display: "none" }}
              />
            </Button>
          </div>

          <Controller
              name="content"
              control={control}
              defaultValue=""
              rules={{
                required: 'Content name is required'
              }}
              render={({ field }) => (
                <TextField
                  label="Content"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!formState.errors.content}
                  {...field} />
              )}
            />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </form>

        {/* POST HERE */}

        <Card>
          <CardContent>
            <Link to="/user/profile" color="inherit" className="flex items-center gap-2">
              <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
              <Typography variant="h5">
                John Doe
              </Typography>
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Typography variant="h6" color="textPrimary">
                Title
              </Typography>
              <img src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg" alt="Post Image" className="w-full rounded" />
              <Typography color="textSecondary">
                Amazing content description goes here.
              </Typography>
            </div>
          </CardContent>
        </Card>

      </Paper>
    </Container>
  );
};

export default Post;
