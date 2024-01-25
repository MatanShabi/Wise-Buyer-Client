import { FC } from "react"
import useUser from "../../hooks/useUser"

interface PostProps {
}
  
  const Post: FC<PostProps> = (props) => {
    const { user } = useUser()

    return (
      <div>
      Post Page 
      {JSON.stringify(user)}
      </div>
    )
  }

  export default Post 