import Allposts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
// const DUMMY = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Next js start",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js for production mern applications",
//     date: "2022-08-11",
//   },

//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Next js start",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js for production mern applications",
//     date: "2022-08-11",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Next js start",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js for production mern applications",
//     date: "2022-08-11",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Next js start",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js for production mern applications",
//     date: "2022-08-11",
//   },
// ];

function AllPostsPage(props) {
  return <Allposts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
