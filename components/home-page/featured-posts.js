import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";
import { Fragment } from "react";

function FeaturedPosts(props) {
  return (
    <Fragment>
      <section className={classes.latest}>
        <PostsGrid posts={props.posts} />
      </section>
    </Fragment>
  );
}

export default FeaturedPosts;
