import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Next js start",
  image: "getting-started-nextjs.png",
  date: "2022-08-11",
  content: "# this is a first post",
};

function PostContent() {
  const imagepath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagepath} />
      <ReactMarkdown children={DUMMY_POST.content} />
    </article>
  );
}

export default PostContent;
