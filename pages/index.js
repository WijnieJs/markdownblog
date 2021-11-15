import React, { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY = [
  {
    slug: "getting-started-with-nextjs",
    title: "Next js start",
    image: "getting-started-nextjs.png",
    excerpt: "Next js for production mern applications",
    date: "2022-08-11",
  },

  {
    slug: "getting-started-with-nextjs2",
    title: "Next js start",
    image: "getting-started-nextjs.png",
    excerpt: "Next js for production mern applications",
    date: "2022-08-11",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Next js start",
    image: "getting-started-nextjs.png",
    excerpt: "Next js for production mern applications",
    date: "2022-08-11",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Next js start",
    image: "getting-started-nextjs.png",
    excerpt: "Next js for production mern applications",
    date: "2022-08-11",
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY} />
    </Fragment>
  );
}

export default HomePage;
