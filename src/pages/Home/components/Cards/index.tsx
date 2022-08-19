import { IPost } from "../../../../types";
import { CardContainer } from "./styles"
import { Link } from "react-router-dom";

interface PostProps {
  post: IPost;
}

export const Card = ({ post }: PostProps) => {
  return (
    <CardContainer>
      <div>
        <Link to={`/blog/${post.number}`}>
          {" "}
          <h3>{post.title}</h3>
        </Link>

        <span>Há 1 dia</span>
      </div>
      <div>
        <p>{post.body.match(/[^\#\*]/g)}</p>
      </div>
    </CardContainer>
  );
}