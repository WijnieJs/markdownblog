import ReactMarkdown from "react-markdown";
import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;
  console.log(props);
  const imagepath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          width={300}
          alt={image.alt}
          height={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagepath} />
      <ReactMarkdown components={customRenderers} children={post.content} />
    </article>
  );
}
export default PostContent;
