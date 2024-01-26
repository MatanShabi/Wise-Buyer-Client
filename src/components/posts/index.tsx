import useUser from "../../hooks/useUser";
import { Container, Paper } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import AddPost from "./AddPost";

export interface IPost {
  title: string;
  catalog: string;
  description: string;
  link?: string;
  pictureUrl: string;
  price: number;
  owner?: string;
}

const Post = () => {
  const { user } = useUser();

  const methods = useForm<IPost>({
    defaultValues: {
      title: "",
      link: "",
      catalog: "",
      description: "",
      price: 0,
    }
  })
  const handleSubmitPost = async (postData: IPost) => console.log(postData)

  return (
    <Container maxWidth="lg" className="my-8">
      <Paper className="p-8">
        <FormProvider {...methods}>
          <AddPost handleSubmitPost={handleSubmitPost} />
        </FormProvider>
      </Paper>
    </Container>
  );
};

export default Post;
