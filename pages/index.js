import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Typed from "react-typed";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-utils";
import { useInterval } from "../lib/useInterval";

import classes from "../styles/index.module.css";
function HomePage(props) {
  let [flipping, setFlipping] = useState(false);

  useInterval(() => {
    let isFlipping = flipping ? false : true;
    // Your custom logic here

    setFlipping(isFlipping);
  }, 5200);

  const roles = [
    "Developer",
    "Tech Lover",
    "Team Player",
    "Look around",
    "And see ",
    "My work",
  ];

  return (
    <Fragment>
      <Head>
        <title>Wijnand </title>
        <meta
          name="description"
          content="I made this to show my work and introduce myself"
        />
      </Head>
      <div className={classes.mainSection}>
        <div className={classes.bckImage} />

        <Hero flipping={flipping} />
      </div>
      <div className={classes.feature}></div>
      <div className={classes.featureType}>
        <Typed
          loop
          typeSpeed={60}
          backSpeed={60}
          strings={roles}
          backDelay={1000}
          loopCount={0}
          showCursor
          className={classes.selfTyped}
          cursorChar="|"
        />
      </div>
      <h1 className={classes.story}>Sharing my latest stories </h1>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
