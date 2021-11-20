import PostItem from "./post-item";
import classes from "./posts-grid.module.css";
import { Zoom } from "react-awesome-reveal";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Zoom key={post.slug}>
          <PostItem key={post.slug} post={post} />
        </Zoom>
      ))}
    </ul>
  );
}

export default PostsGrid;
