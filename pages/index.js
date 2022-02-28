import { Fragment } from "react";
import FreaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage() {
  return (
    <Fragment>
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
