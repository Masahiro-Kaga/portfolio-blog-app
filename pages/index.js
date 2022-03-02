import Head from "next/head";
import { Fragment } from "react";
import FreaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Masa&apos;s Blog</title>
        <meta name="description" content='I post about programming and web development memo.'></meta>
      </Head>
      <Hero></Hero>
      <FreaturedPosts posts={props.posts}></FreaturedPosts>
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  return{
    props:{
      posts:featuredPosts
    }
  }
}

export default HomePage;
