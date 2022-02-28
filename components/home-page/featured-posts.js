import React from "react";
import PostsGrid from "../posts/posts-grid";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FeaturedPosts = (props) => {
  return (
    <section css={featured_post}>
        <h2>Featured Post</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
};

const featured_post = css`
    margin: 4rem auto;
    text-align: center;
    width:90%;
    font-family: "Dosis", sans-serif;
    > h2{
        font-size:2.5rem;
        margin: 10rem auto;
    }
    
`

export default FeaturedPosts;
