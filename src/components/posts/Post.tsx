import { Avatar, Card, CardContent, Typography } from "@mui/material"
import { IPost } from "."
import { Link } from "react-router-dom"

interface PostProps {
    post: IPost
}

const Post: React.FC<PostProps> = ({ post }) => {
    const { title, description, catalog, productUrl, price, link, user } = post
    return (
        <Card className="mt-4" style={{ borderRadius: '0.6rem' }}>
            <CardContent>
                <Link to="/user/profile" color="inherit" className="flex items-center gap-2">
                    <Avatar alt={user?.firstName?.toUpperCase() || ""} src={user?.pictureUrl} />
                    <Typography variant="h5">
                        {user?.firstName} {user?.lastName}
                    </Typography>
                </Link>
                <div className="flex flex-col gap-2 mt-4 ml-12 mr-12 mb-3">
                    <Typography variant="h6" color="textPrimary" className="flex gap-2">
                        <p>{title}</p> | <p>{catalog}</p>
                    </Typography>
                    {productUrl &&
                        <img src={link} alt="Product Image" className="w-full h-[40rem] p-5" />}
                    <Typography color="textSecondary">
                        {description}
                    </Typography>
                    <Typography color="textSecondary">
                    </Typography>
                    <Typography color="textSecondary">
                        Product URL: <a href={productUrl} target="_blank" rel="noopener noreferrer">{productUrl}</a>
                    </Typography>
                    <Typography color="textSecondary">
                        Price: {price}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Post;